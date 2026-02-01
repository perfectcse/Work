"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  dealId: string;
  isLocked: boolean;
};

export default function ClaimButton({ dealId, isLocked }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [claimed, setClaimed] = useState(false);

  if (isLocked) {
    return (
      <div className="p-4 border border-red-600 rounded-lg text-red-400">
        🔒 This deal requires startup verification before it can be claimed.
      </div>
    );
  }

  if (claimed) {
    return (
      <div className="p-4 border border-yellow-500 rounded-lg text-yellow-400">
        ⏳ Claim submitted. Status: Pending approval.
      </div>
    );
  }

  const handleClaim = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to claim this deal.");
        return;
      }

      const res = await fetch(
        `http://localhost:5000/api/claims/${dealId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Claim failed");
      }

      setClaimed(true);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Unable to claim deal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClaim}
      disabled={loading}
      className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition hover:opacity-90 disabled:opacity-60"
    >
      {loading ? "Claiming..." : "Claim Deal"}
    </button>
  );
}
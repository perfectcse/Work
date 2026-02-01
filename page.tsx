"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { api } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const data = await api<{ token: string }>("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      // save JWT
      localStorage.setItem("token", data.token);

      // redirect after success
      router.push("/dashboard");
    } catch {
      alert("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-white cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </main>
  );
}
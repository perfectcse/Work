"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function DealsSearch({ value, onChange }: Props) {
  return (
    <input
      type="text"
      aria-label="Search deals"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search deals..."
      className="w-full md:w-64 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 outline-none placeholder-gray-500"
    />
  );
}
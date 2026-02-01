"use client";

type FilterType = "all" | "locked" | "unlocked";

type Props = {
  filter: FilterType;
  setFilter: (value: FilterType) => void;
};

export default function DealsFilters({ filter, setFilter }: Props) {
  return (
    <select
      aria-label="Filter deals by access level"
      value={filter}
      onChange={(e) => setFilter(e.target.value as FilterType)}
      className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 outline-none"
    >
      <option value="all">All</option>
      <option value="unlocked">Unlocked</option>
      <option value="locked">Locked</option>
    </select>
  );
}
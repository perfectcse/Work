export default function Loading() {
  return (
    <main className="min-h-screen px-8 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-xl bg-gray-800 animate-pulse"
          />
        ))}
      </div>
    </main>
  );
}
export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-10 w-48 rounded bg-gray-200" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border"
            >
              <div className="h-56 bg-gray-200" />

              <div className="space-y-4 p-5">
                <div className="h-5 w-24 rounded bg-gray-200" />
                <div className="h-7 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-10 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
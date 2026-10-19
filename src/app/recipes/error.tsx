"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600">
        We couldn't load the recipes right now.
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
      >
        Try Again
      </button>
    </main>
  );
}
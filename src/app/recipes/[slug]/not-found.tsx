import Link from "next/link";

export default function RecipeNotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        404
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        Recipe Not Found
      </h1>

      <p className="mt-4 text-gray-600">
        Sorry, we couldn't find the recipe you're looking for.
      </p>

      <Link
        href="/recipes"
        className="mt-8 rounded-xl bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700"
      >
        Browse Recipes
      </Link>
    </main>
  );
}
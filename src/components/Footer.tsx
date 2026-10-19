import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-gray-900"
            >
              CookBook
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
              Discover delicious recipes, explore new cuisines,
              and find something amazing to cook every day.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Explore
            </h3>

            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/recipes" className="hover:text-black">
                All Recipes
              </Link>

              <Link
                href="/recipes/category/breakfast"
                className="hover:text-black"
              >
                Breakfast
              </Link>

              <Link
                href="/recipes/category/dinner"
                className="hover:text-black"
              >
                Dinner
              </Link>

              <Link
                href="/recipes/category/dessert"
                className="hover:text-black"
              >
                Desserts
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              About
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              A frontend project built with Next.js App Router,
              TypeScript and local dummy data.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 CookBook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
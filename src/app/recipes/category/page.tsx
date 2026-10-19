import CategoryCard from "@/components/CategoryCard";
import { categories } from "../../data/categories";

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Explore
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Recipe Categories
        </h1>

        <p className="mt-3 text-gray-600">
          Browse recipes by occasion.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            {...category}
          />
        ))}
      </div>
    </main>
  );
}
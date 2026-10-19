import { notFound } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";
import { recipes } from "../../../data/recipes";
import { categories } from "../../../data/categories";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const currentCategory = categories.find(
    (item) => item.slug === category.toLowerCase()
  );

  if (!currentCategory) {
    notFound();
  }

  const categoryRecipes = recipes.filter(
    (recipe) =>
      recipe.category.toLowerCase() ===
      currentCategory.name.toLowerCase()
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Category
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {currentCategory.name}
        </h1>

        <p className="mt-3 text-gray-600">
          {currentCategory.description}
        </p>
      </div>

      <RecipeGrid recipes={categoryRecipes} />
    </main>
  );
}
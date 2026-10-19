import SearchBar from "@/components/SearchBar";
import RecipeGrid from "@/components/RecipeGrid";
import { recipes } from "../data/recipes";

interface RecipesPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    sort?: string;
  }>;
}

export default async function RecipesPage({
  searchParams,
}: RecipesPageProps) {
  const params = await searchParams;

  const search = params.search?.toLowerCase() || "";
  const category = params.category?.toLowerCase() || "";
  const sort = params.sort || "";

  let filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      !search ||
      recipe.name.toLowerCase().includes(search) ||
      recipe.description.toLowerCase().includes(search) ||
      recipe.cuisine.toLowerCase().includes(search);

    const matchesCategory =
      !category ||
      recipe.category.toLowerCase() === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "rating") {
    filteredRecipes = [...filteredRecipes].sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "time") {
    filteredRecipes = [...filteredRecipes].sort(
      (a, b) =>
        a.prepTime +
        a.cookTime -
        (b.prepTime + b.cookTime)
    );
  }

  if (sort === "name") {
    filteredRecipes = [...filteredRecipes].sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Explore
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          All Recipes
        </h1>

        <p className="mt-3 text-gray-600">
          Discover delicious recipes for every occasion.
        </p>
      </div>

      <div className="mb-10">
        <SearchBar initialValue={params.search || ""} />
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="/recipes"
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          All
        </a>

        <a
          href="/recipes?category=breakfast"
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Breakfast
        </a>

        <a
          href="/recipes?category=lunch"
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Lunch
        </a>

        <a
          href="/recipes?category=dinner"
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Dinner
        </a>

        <a
          href="/recipes?category=dessert"
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Dessert
        </a>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="/recipes?sort=rating"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Highest Rated
        </a>

        <a
          href="/recipes?sort=time"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Quickest
        </a>

        <a
          href="/recipes?sort=name"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-100"
        >
          A-Z
        </a>
      </div>

      <p className="mb-6 text-sm text-gray-500">
        {filteredRecipes.length} recipes found
      </p>

      <RecipeGrid recipes={filteredRecipes} />
    </main>
  );
}
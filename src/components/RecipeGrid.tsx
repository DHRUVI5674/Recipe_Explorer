import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "../app/types/recipe";

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({
  recipes,
}: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-12 text-center">
        <h2 className="text-xl font-semibold">
          No recipes found
        </h2>

        <p className="mt-2 text-gray-600">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
}
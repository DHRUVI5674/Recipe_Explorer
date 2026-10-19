import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../app/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      <Link href={`/recipes/${recipe.slug}`}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            {recipe.category}
          </span>

          <span className="text-sm font-medium text-gray-700">
            ⭐ {recipe.rating}
          </span>
        </div>

        <Link href={`/recipes/${recipe.slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 transition hover:text-gray-600">
            {recipe.name}
          </h2>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
          {recipe.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>
            {recipe.prepTime + recipe.cookTime} min
          </span>

          <span>
            {recipe.difficulty}
          </span>
        </div>

        <Link
          href={`/recipes/${recipe.slug}`}
          className="mt-5 block rounded-xl bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-gray-700"
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
}
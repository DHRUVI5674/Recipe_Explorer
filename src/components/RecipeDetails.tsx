import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../app/types/recipe";
import IngredientList from "../components/IngredientList";
// import Instructions from "@/components/Instructions";

interface RecipeDetailsProps {
  recipe: Recipe;
  relatedRecipes: Recipe[];
}

export default function RecipeDetails({
  recipe,
  relatedRecipes,
}: RecipeDetailsProps) {
  return (
    <article className="mx-auto max-w-7xl px-6 py-10">

      {/* Hero Section */}

      <section className="grid gap-10 md:grid-cols-2">

        {/* Image */}

        <div className="relative h-[450px] overflow-hidden rounded-3xl">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Basic Details */}

        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            {recipe.category}
          </span>

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            {recipe.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {recipe.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Prep Time
              </p>

              <p className="mt-1 font-semibold">
                {recipe.prepTime} min
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Cook Time
              </p>

              <p className="mt-1 font-semibold">
                {recipe.cookTime} min
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Servings
              </p>

              <p className="mt-1 font-semibold">
                {recipe.servings}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">
                Rating
              </p>

              <p className="mt-1 font-semibold">
                ⭐ {recipe.rating}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Ingredients */}

      <IngredientList
        ingredients={recipe.ingredients}
      />


      {/* Instructions */}

      {/* <Instructions
        instructions={recipe.instructions}
      /> */}

    </article>
  );
}
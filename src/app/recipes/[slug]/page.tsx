import { notFound } from "next/navigation";
import RecipeDetails from "@/components/RecipeDetails";
import { recipes } from "../../data/recipes";

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RecipePage({
  params,
}: RecipePageProps) {
  const { slug } = await params;

  const recipe = recipes.find(
    (recipe) => recipe.slug === slug
  );

  if (!recipe) {
    notFound();
  }

  const relatedRecipes = recipes
    .filter(
      (item) =>
        item.category === recipe.category &&
        item.id !== recipe.id
    )
    .slice(0, 3);

  return (
    <RecipeDetails
      recipe={recipe}
      relatedRecipes={relatedRecipes}
    />
  );
}
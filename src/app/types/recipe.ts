export interface Recipe {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;

  category: string;
  cuisine: string;

  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  rating: number;

  ingredients: string[];
  instructions: string[];

  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}
interface IngredientListProps {
  ingredients: string[];
}

export default function IngredientList({
  ingredients,
}: IngredientListProps) {
  return (
    <section>
      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
}
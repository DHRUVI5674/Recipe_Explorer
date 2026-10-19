import { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "butter-paneer",
    name: "Butter Paneer",
    description:
      "A rich and creamy Indian curry made with paneer, tomatoes and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",

    category: "Dinner",
    cuisine: "Indian",

    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "250g paneer",
      "3 large tomatoes",
      "2 tablespoons butter",
      "1 tablespoon oil",
      "1 onion",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon red chilli powder",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric",
      "1/2 cup fresh cream",
      "Salt to taste",
      "Fresh coriander",
    ],

    instructions: [
      "Cut the paneer into medium-sized cubes.",
      "Heat butter and oil in a pan.",
      "Add onions and cook until golden brown.",
      "Add ginger-garlic paste and cook for one minute.",
      "Add tomatoes and spices.",
      "Cook until the tomatoes become soft.",
      "Blend the mixture into a smooth gravy.",
      "Add paneer and fresh cream.",
      "Simmer for 5–7 minutes.",
      "Garnish with fresh coriander and serve hot.",
    ],

    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 14,
      fat: 31,
    },
  },

  {
    id: 2,
    slug: "masala-dosa",
    name: "Masala Dosa",
    description:
      "A crispy South Indian dosa filled with a flavorful potato masala.",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",

    category: "Breakfast",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 20,
    servings: 3,
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "2 cups rice",
      "1/2 cup urad dal",
      "3 potatoes",
      "1 onion",
      "2 green chillies",
      "1 teaspoon mustard seeds",
      "1/2 teaspoon turmeric",
      "8 curry leaves",
      "2 tablespoons oil",
      "Salt to taste",
    ],

    instructions: [
      "Soak rice and urad dal separately.",
      "Grind them into a smooth batter.",
      "Ferment the batter overnight.",
      "Boil and mash the potatoes.",
      "Prepare the potato masala with onions and spices.",
      "Heat a dosa pan.",
      "Spread the batter into a thin circle.",
      "Add potato masala in the center.",
      "Fold the dosa and serve hot.",
    ],

    nutrition: {
      calories: 310,
      protein: 8,
      carbs: 48,
      fat: 10,
    },
  },

  {
    id: 3,
    slug: "chole-bhature",
    name: "Chole Bhature",
    description:
      "A popular North Indian dish featuring spicy chickpea curry served with fluffy fried bhature.",
    image:
      "https://images.unsplash.com/photo-1788602564560-9bcbf0f9acb6?q=80&w=735?auto=format&fit=crop&w=800&q=80",

    category: "Lunch",
    cuisine: "Indian",

    prepTime: 30,
    cookTime: 40,
    servings: 4,
    difficulty: "Medium",
    rating: 4.6,

    ingredients: [
      "2 cups chickpeas",
      "2 onions",
      "3 tomatoes",
      "1 tablespoon ginger-garlic paste",
      "2 green chillies",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric",
      "2 teaspoons chole masala",
      "1 teaspoon red chilli powder",
      "2 cups all-purpose flour",
      "1/2 cup yogurt",
      "Oil for frying",
      "Salt to taste",
    ],

    instructions: [
      "Soak chickpeas overnight.",
      "Pressure cook the chickpeas until soft.",
      "Heat oil and add cumin seeds.",
      "Add onions and cook until golden.",
      "Add ginger-garlic paste and green chillies.",
      "Add tomatoes and spices.",
      "Cook until the masala becomes thick.",
      "Add boiled chickpeas and simmer.",
      "Prepare a soft dough using flour and yogurt.",
      "Roll the dough into small circles.",
      "Deep fry until the bhature puff up.",
      "Serve hot with chole.",
    ],

    nutrition: {
      calories: 520,
      protein: 16,
      carbs: 72,
      fat: 19,
    },
  },

  {
    id: 4,
    slug: "paneer-tikka",
    name: "Paneer Tikka",
    description:
      "Soft paneer cubes marinated with yogurt and spices, then grilled until lightly charred.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",

    category: "Starter",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 15,
    servings: 3,
    difficulty: "Easy",
    rating: 4.8,

    ingredients: [
      "250g paneer",
      "1/2 cup yogurt",
      "1 capsicum",
      "1 onion",
      "1 teaspoon ginger-garlic paste",
      "1 teaspoon red chilli powder",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric",
      "1 teaspoon chaat masala",
      "1 tablespoon lemon juice",
      "1 tablespoon oil",
      "Salt to taste",
    ],

    instructions: [
      "Cut paneer, onion and capsicum into medium-sized pieces.",
      "Mix yogurt with spices, lemon juice and oil.",
      "Add paneer and vegetables to the marinade.",
      "Mix well and rest for 20 minutes.",
      "Thread paneer and vegetables onto skewers.",
      "Grill or bake until lightly charred.",
      "Sprinkle chaat masala on top.",
      "Serve hot with mint chutney.",
    ],

    nutrition: {
      calories: 280,
      protein: 17,
      carbs: 10,
      fat: 20,
    },
  },

  {
    id: 5,
    slug: "vegetable-biryani",
    name: "Vegetable Biryani",
    description:
      "A fragrant rice dish cooked with fresh vegetables, aromatic spices and herbs.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",

    category: "Lunch",
    cuisine: "Indian",

    prepTime: 25,
    cookTime: 35,
    servings: 4,
    difficulty: "Medium",
    rating: 4.7,

    ingredients: [
      "2 cups basmati rice",
      "1 carrot",
      "1 cup green peas",
      "1 capsicum",
      "1 onion",
      "1 tomato",
      "1/2 cup yogurt",
      "1 teaspoon ginger-garlic paste",
      "1 teaspoon biryani masala",
      "1/2 teaspoon turmeric",
      "1 teaspoon red chilli powder",
      "2 tablespoons oil",
      "Fresh coriander",
      "Fresh mint",
      "Salt to taste",
    ],

    instructions: [
      "Wash and soak the basmati rice.",
      "Cook the rice until it is about 80% done.",
      "Heat oil and fry the sliced onions.",
      "Add ginger-garlic paste and vegetables.",
      "Add tomatoes, yogurt and spices.",
      "Cook the vegetables until slightly tender.",
      "Layer the cooked rice over the vegetable mixture.",
      "Add mint and coriander.",
      "Cover and cook on low heat for 10 minutes.",
      "Gently mix and serve hot.",
    ],

    nutrition: {
      calories: 390,
      protein: 9,
      carbs: 62,
      fat: 12,
    },
  },

  {
    id: 6,
    slug: "palak-paneer",
    name: "Palak Paneer",
    description:
      "A nutritious Indian curry made with creamy spinach gravy and soft paneer cubes.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",

    category: "Dinner",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,

    ingredients: [
      "250g paneer",
      "500g fresh spinach",
      "1 onion",
      "2 tomatoes",
      "1 tablespoon ginger-garlic paste",
      "2 green chillies",
      "1 teaspoon cumin seeds",
      "1/2 teaspoon turmeric",
      "1 teaspoon garam masala",
      "2 tablespoons cream",
      "1 tablespoon oil",
      "Salt to taste",
    ],

    instructions: [
      "Wash the spinach thoroughly.",
      "Blanch the spinach in hot water for two minutes.",
      "Transfer the spinach to cold water.",
      "Blend the spinach into a smooth puree.",
      "Heat oil and add cumin seeds.",
      "Add onions and cook until soft.",
      "Add ginger-garlic paste and tomatoes.",
      "Add spinach puree and spices.",
      "Cook for 8–10 minutes.",
      "Add paneer cubes and cream.",
      "Simmer for another 5 minutes.",
      "Serve hot with roti or naan.",
    ],

    nutrition: {
      calories: 340,
      protein: 19,
      carbs: 12,
      fat: 24,
    },
  },

  {
    id: 7,
    slug: "pav-bhaji",
    name: "Pav Bhaji",
    description:
      "A flavorful Mumbai street-food classic made with mashed vegetables and buttery toasted pav.",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",

    category: "Street Food",
    cuisine: "Indian",

    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: "Easy",
    rating: 4.7,

    ingredients: [
      "3 potatoes",
      "1 cup cauliflower",
      "1/2 cup green peas",
      "1 capsicum",
      "2 tomatoes",
      "1 onion",
      "1 tablespoon ginger-garlic paste",
      "2 tablespoons pav bhaji masala",
      "1 teaspoon red chilli powder",
      "2 tablespoons butter",
      "8 pav buns",
      "Fresh coriander",
      "Lemon wedges",
      "Salt to taste",
    ],

    instructions: [
      "Boil potatoes, cauliflower and peas until soft.",
      "Mash the boiled vegetables.",
      "Heat butter on a large pan.",
      "Add onions and cook until soft.",
      "Add ginger-garlic paste and capsicum.",
      "Add tomatoes and cook until soft.",
      "Add pav bhaji masala and chilli powder.",
      "Add the mashed vegetables.",
      "Mash everything together while cooking.",
      "Simmer for 10 minutes.",
      "Toast pav buns with butter.",
      "Serve bhaji with toasted pav, coriander and lemon.",
    ],

    nutrition: {
      calories: 360,
      protein: 9,
      carbs: 52,
      fat: 13,
    },
  },

  {
    id: 8,
    slug: "gulab-jamun",
    name: "Gulab Jamun",
    description:
      "Soft golden milk-solid dumplings soaked in fragrant sugar syrup.",
    image:
      "https://images.unsplash.com/photo-1635952346904-95f2ccfcd029?auto=format&fit=crop&w=800&q=80",

    category: "Dessert",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 20,
    servings: 6,
    difficulty: "Medium",
    rating: 4.9,

    ingredients: [
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "2 tablespoons yogurt",
      "1/2 teaspoon baking powder",
      "2 tablespoons milk",
      "1 cup sugar",
      "1 cup water",
      "3 cardamom pods",
      "1 teaspoon rose water",
      "Oil for frying",
    ],

    instructions: [
      "Mix milk powder, flour and baking powder.",
      "Add yogurt and milk gradually.",
      "Knead into a soft dough.",
      "Rest the dough for 10 minutes.",
      "Make small smooth balls without cracks.",
      "Heat oil on low-medium heat.",
      "Fry the balls until golden brown.",
      "Prepare sugar syrup with sugar, water and cardamom.",
      "Add rose water to the syrup.",
      "Soak the fried gulab jamun in warm syrup.",
      "Rest for at least 30 minutes before serving.",
    ],

    nutrition: {
      calories: 280,
      protein: 5,
      carbs: 45,
      fat: 10,
    },
  },

  {
    id: 9,
    slug: "idli-sambar",
    name: "Idli Sambar",
    description:
      "Soft steamed South Indian idlis served with flavorful lentil-based vegetable sambar.",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",

    category: "Breakfast",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Easy",
    rating: 4.6,

    ingredients: [
      "2 cups idli rice",
      "1 cup urad dal",
      "1 cup toor dal",
      "1 carrot",
      "1 tomato",
      "1 onion",
      "1 cup pumpkin",
      "1 teaspoon mustard seeds",
      "8 curry leaves",
      "2 tablespoons sambar powder",
      "1/2 teaspoon turmeric",
      "2 tablespoons oil",
      "Salt to taste",
    ],

    instructions: [
      "Soak rice and urad dal separately.",
      "Grind them into a smooth batter.",
      "Ferment the batter overnight.",
      "Pour the batter into greased idli moulds.",
      "Steam the idlis for 10–12 minutes.",
      "Cook toor dal until soft.",
      "Cook vegetables with tomatoes and onions.",
      "Add sambar powder and turmeric.",
      "Mix the cooked dal with the vegetables.",
      "Prepare tempering with mustard seeds and curry leaves.",
      "Add the tempering to the sambar.",
      "Serve hot idlis with sambar.",
    ],

    nutrition: {
      calories: 260,
      protein: 10,
      carbs: 45,
      fat: 6,
    },
  },

  {
    id: 10,
    slug: "rajma-chawal",
    name: "Rajma Chawal",
    description:
      "A comforting North Indian meal of kidney bean curry served with steamed basmati rice.",
    image:
      "https://images.unsplash.com/photo-1788601988466-9f361c34c6cb?auto=format&fit=crop&w=800&q=80",

    category: "Lunch",
    cuisine: "Indian",

    prepTime: 20,
    cookTime: 40,
    servings: 4,
    difficulty: "Easy",
    rating: 4.8,

    ingredients: [
      "2 cups rajma",
      "2 cups basmati rice",
      "2 onions",
      "3 tomatoes",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1 teaspoon turmeric",
      "1 teaspoon red chilli powder",
      "1 teaspoon garam masala",
      "2 tablespoons oil",
      "Fresh coriander",
      "Salt to taste",
    ],

    instructions: [
      "Soak rajma overnight.",
      "Pressure cook the rajma until completely soft.",
      "Wash and cook the basmati rice separately.",
      "Heat oil and add cumin seeds.",
      "Add onions and cook until golden.",
      "Add ginger-garlic paste.",
      "Add tomatoes and spices.",
      "Cook until the oil separates from the masala.",
      "Add cooked rajma and some cooking water.",
      "Simmer for 15 minutes.",
      "Add garam masala and fresh coriander.",
      "Serve hot with steamed rice.",
    ],

    nutrition: {
      calories: 430,
      protein: 16,
      carbs: 68,
      fat: 10,
    },
  },
];
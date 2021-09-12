// import { Recipe } from './Recipe';

// export interface Recipes {
//   recipes: Recipe[];
// }

//EDAMAM STUFF BELOW-----------------------

// import { Recipe } from './Recipe';

export interface Recipes {
  from: number;
  to: number;
  count: number;
  _links: Links;
  hits: Hit[];
}

interface Hit {
  recipe: Recipe;
  _links: Links;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalNutrients;
  digest: Digest[];
}

interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: TotalNutrients;
}

interface TotalNutrients {}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodId: string;
}

interface Links {
  self: Self;
  next: Self;
}

interface Self {
  href: string;
  title: string;
}

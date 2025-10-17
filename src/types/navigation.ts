import type { NavigatorScreenParams } from "@react-navigation/native"

export type Recipe = {
  id: string
  name: string
  ingredients: string
  prepTime: number
  refrigerate: boolean
  createdAt: Date
}

export type RecipesStackParamList = {
  RecipesList: undefined
  RecipeDetails: { recipe: Recipe }
}

export type RootTabParamList = {
  Recipes: NavigatorScreenParams<RecipesStackParamList>
  AddRecipe: undefined
}

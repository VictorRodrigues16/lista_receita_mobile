import { createStackNavigator } from "@react-navigation/stack"
import RecipesListScreen from "../screens/RecipesListScreen"
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen"
import type { RecipesStackParamList } from "../types/navigation"

const Stack = createStackNavigator<RecipesStackParamList>()

const RecipesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d97706",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="RecipesList" component={RecipesListScreen} options={{ title: "Todas as Receitas" }} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ title: "Detalhes da Receita" }} />
    </Stack.Navigator>
  )
}

export default RecipesStackNavigator

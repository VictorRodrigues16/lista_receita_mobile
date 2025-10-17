import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import TabNavigator from "./src/navigation/TabNavigator"
import { RecipesProvider } from "./src/context/RecipesContext"

export default function App() {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#d97706" />
        <TabNavigator />
      </NavigationContainer>
    </RecipesProvider>
  )
}

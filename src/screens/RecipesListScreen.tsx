import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"
import { Ionicons } from "@expo/vector-icons"
import { useRecipes } from "../context/RecipesContext"
import type { RecipesStackParamList } from "../types/navigation"

type RecipesListNavigationProp = StackNavigationProp<RecipesStackParamList, "RecipesList">

const RecipesListScreen = () => {
  const navigation = useNavigation<RecipesListNavigationProp>()
  const { recipes } = useRecipes()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#d97706" />

      {recipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="restaurant-outline" size={80} color="#d97706" />
          <Text style={styles.emptyTitle}>Nenhuma receita ainda</Text>
          <Text style={styles.emptyText}>Adicione sua primeira receita usando a aba "Adicionar"</Text>
        </View>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.recipeCard}
              onPress={() => navigation.navigate("RecipeDetails", { recipe: item })}
              activeOpacity={0.7}
            >
              <View style={styles.recipeHeader}>
                <View style={styles.recipeIconContainer}>
                  <Ionicons name="restaurant" size={24} color="#d97706" />
                </View>
                <View style={styles.recipeInfo}>
                  <Text style={styles.recipeName}>{item.name}</Text>
                  <View style={styles.recipeMetaContainer}>
                    <View style={styles.recipeMeta}>
                      <Ionicons name="time-outline" size={16} color="#78716c" />
                      <Text style={styles.recipeMetaText}>{item.prepTime} min</Text>
                    </View>
                    {item.refrigerate && (
                      <View style={styles.recipeMeta}>
                        <Ionicons name="snow-outline" size={16} color="#0ea5e9" />
                        <Text style={styles.recipeMetaText}>Geladeira</Text>
                      </View>
                    )}
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#a8a29e" />
              </View>
              <Text style={styles.recipeIngredients} numberOfLines={2}>
                {item.ingredients}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3c7",
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#78716c",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: "#a8a29e",
    textAlign: "center",
    lineHeight: 24,
  },
  recipeCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#d97706",
  },
  recipeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  recipeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#fef3c7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292524",
    marginBottom: 4,
  },
  recipeMetaContainer: {
    flexDirection: "row",
    gap: 12,
  },
  recipeMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  recipeMetaText: {
    fontSize: 14,
    color: "#78716c",
  },
  recipeIngredients: {
    fontSize: 14,
    color: "#57534e",
    lineHeight: 20,
  },
})

export default RecipesListScreen

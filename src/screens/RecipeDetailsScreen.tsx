import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native"
import { useRoute, type RouteProp } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import type { RecipesStackParamList } from "../types/navigation"

type RecipeDetailsRouteProp = RouteProp<RecipesStackParamList, "RecipeDetails">

const RecipeDetailsScreen = () => {
  const route = useRoute<RecipeDetailsRouteProp>()
  const { recipe } = route.params

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#d97706" />

      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="restaurant" size={48} color="#d97706" />
        </View>
        <Text style={styles.title}>{recipe.name}</Text>
      </View>

      <View style={styles.metaContainer}>
        <View style={styles.metaCard}>
          <Ionicons name="time" size={32} color="#d97706" />
          <Text style={styles.metaValue}>{recipe.prepTime}</Text>
          <Text style={styles.metaLabel}>minutos</Text>
        </View>

        <View style={styles.metaCard}>
          <Ionicons
            name={recipe.refrigerate ? "snow" : "close-circle"}
            size={32}
            color={recipe.refrigerate ? "#0ea5e9" : "#78716c"}
          />
          <Text style={styles.metaValue}>{recipe.refrigerate ? "Sim" : "Não"}</Text>
          <Text style={styles.metaLabel}>Geladeira</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="list" size={24} color="#d97706" />
          <Text style={styles.sectionTitle}>Ingredientes</Text>
        </View>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredientsText}>{recipe.ingredients}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calendar" size={24} color="#d97706" />
          <Text style={styles.sectionTitle}>Adicionada em</Text>
        </View>
        <Text style={styles.dateText}>
          {new Date(recipe.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3c7",
  },
  header: {
    backgroundColor: "#fff",
    padding: 24,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#fef3c7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#292524",
    textAlign: "center",
  },
  metaContainer: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
  metaCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  metaValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#292524",
    marginTop: 8,
  },
  metaLabel: {
    fontSize: 14,
    color: "#78716c",
    marginTop: 4,
  },
  section: {
    backgroundColor: "#fff",
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#292524",
  },
  ingredientsContainer: {
    backgroundColor: "#fef3c7",
    padding: 16,
    borderRadius: 12,
  },
  ingredientsText: {
    fontSize: 16,
    color: "#57534e",
    lineHeight: 24,
  },
  dateText: {
    fontSize: 16,
    color: "#57534e",
  },
})

export default RecipeDetailsScreen

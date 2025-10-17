"use client"

import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useRecipes } from "../context/RecipesContext"

const AddRecipeScreen = () => {
  const { addRecipe } = useRecipes()

  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [prepTime, setPrepTime] = useState("")
  const [refrigerate, setRefrigerate] = useState(false)

  const [nameError, setNameError] = useState("")
  const [prepTimeError, setPrepTimeError] = useState("")

  const validateForm = (): boolean => {
    let isValid = true

    if (name.trim() === "") {
      setNameError("O nome da receita é obrigatório")
      isValid = false
    } else {
      setNameError("")
    }

    const prepTimeNum = Number(prepTime)
    if (prepTime.trim() === "") {
      setPrepTimeError("O tempo de preparo é obrigatório")
      isValid = false
    } else if (isNaN(prepTimeNum) || prepTimeNum <= 0) {
      setPrepTimeError("O tempo deve ser um número positivo")
      isValid = false
    } else {
      setPrepTimeError("")
    }

    return isValid
  }

  const handleSubmit = () => {
    if (validateForm()) {
      addRecipe({
        name: name.trim(),
        ingredients: ingredients.trim() || "Não especificado",
        prepTime: Number(prepTime),
        refrigerate,
      })

      setName("")
      setIngredients("")
      setPrepTime("")
      setRefrigerate(false)
      setNameError("")
      setPrepTimeError("")

      Alert.alert("Sucesso!", "Receita adicionada com sucesso!", [{ text: "OK" }])
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar barStyle="light-content" backgroundColor="#d97706" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle" size={48} color="#d97706" />
          </View>
          <Text style={styles.title}>Nova Receita</Text>
          <Text style={styles.subtitle}>Preencha os campos abaixo</Text>
        </View>

        <View style={styles.form}>
          {/* Name Field */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Nome da Receita <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, nameError ? styles.inputError : null]}>
              <Ionicons name="restaurant-outline" size={20} color="#78716c" />
              <TextInput
                style={styles.input}
                placeholder="Ex: Bolo de Chocolate"
                placeholderTextColor="#a8a29e"
                value={name}
                onChangeText={(text) => {
                  setName(text)
                  if (nameError) setNameError("")
                }}
              />
            </View>
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Ingredientes</Text>
            <View style={styles.textAreaContainer}>
              <Ionicons name="list-outline" size={20} color="#78716c" style={styles.textAreaIcon} />
              <TextInput
                style={styles.textArea}
                placeholder="Ex: Farinha, açúcar, ovos, leite..."
                placeholderTextColor="#a8a29e"
                value={ingredients}
                onChangeText={setIngredients}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              Tempo de Preparo (minutos) <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.inputContainer, prepTimeError ? styles.inputError : null]}>
              <Ionicons name="time-outline" size={20} color="#78716c" />
              <TextInput
                style={styles.input}
                placeholder="Ex: 30"
                placeholderTextColor="#a8a29e"
                value={prepTime}
                onChangeText={(text) => {
                  setPrepTime(text)
                  if (prepTimeError) setPrepTimeError("")
                }}
                keyboardType="numeric"
              />
            </View>
            {prepTimeError ? <Text style={styles.errorText}>{prepTimeError}</Text> : null}
          </View>

          <View style={styles.fieldContainer}>
            <View style={styles.switchContainer}>
              <View style={styles.switchLabel}>
                <Ionicons name="snow-outline" size={24} color="#0ea5e9" />
                <View style={styles.switchTextContainer}>
                  <Text style={styles.label}>Reservar na geladeira</Text>
                  <Text style={styles.switchDescription}>Ative se a receita precisa ir à geladeira</Text>
                </View>
              </View>
              <Switch
                value={refrigerate}
                onValueChange={setRefrigerate}
                trackColor={{ false: "#d6d3d1", true: "#fed7aa" }}
                thumbColor={refrigerate ? "#d97706" : "#f5f5f4"}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.8}>
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
            <Text style={styles.submitButtonText}>Adicionar Receita</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3c7",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#78716c",
  },
  form: {
    padding: 16,
  },
  fieldContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#292524",
    marginBottom: 8,
  },
  required: {
    color: "#dc2626",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputError: {
    borderWidth: 2,
    borderColor: "#dc2626",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#292524",
  },
  textAreaContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  textAreaIcon: {
    marginBottom: 8,
  },
  textArea: {
    fontSize: 16,
    color: "#292524",
    minHeight: 100,
  },
  errorText: {
    color: "#dc2626",
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  switchLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  switchTextContainer: {
    flex: 1,
  },
  switchDescription: {
    fontSize: 14,
    color: "#78716c",
    marginTop: 2,
  },
  submitButton: {
    backgroundColor: "#d97706",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: "#d97706",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default AddRecipeScreen

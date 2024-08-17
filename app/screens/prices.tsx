import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, useColorScheme, KeyboardAvoidingView, Platform, Keyboard, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import ThemedTextInput from "@/components/ThemedTextInput";
import CarouselNative from "@/components/CarouselNative";
import FlexibleParallaxScrollView from "@/components/FlexibleParallaxScrollView";

//@ts-ignore
import chivasImage from '../../assets/images/chivas.jpg';

const prices = () => {
  return(
    <FlexibleParallaxScrollView>
      <ThemedView style={styles.inputContainer}>
        <ThemedTextInput
          style={styles.input}
          placeholder="Que estas buscando?"
        />
        <TouchableOpacity>
          <Ionicons name="search-circle" size={35} color="#fe961b" />
        </TouchableOpacity>
      </ThemedView>
      <CarouselNative />
      <ThemedText type="defaultSemiBold">Servicios Frecuentes 🏖️</ThemedText>
    </FlexibleParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "85%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  keyboardAvoidingView: {
    width: "100%",
  },
});

export default prices;



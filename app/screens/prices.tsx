import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import ThemedTextInput from "@/components/ThemedTextInput";

const prices = () => {
  return(
    <ThemedView style={styles.container}>
        <ThemedTextInput/>
        <ThemedText>Prices</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default prices;



import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "@/components/ThemedView";
import ThemedTextInput from "@/components/ThemedTextInput";

const SearchBar: React.FC = () => (
  <ThemedView style={styles.inputContainer}>
    <ThemedTextInput
      style={styles.input}
      placeholder="Busca un servicio o actividad..."
    />
    <TouchableOpacity>
      <Ionicons name="search-circle" size={35} color="#fe961b" />
    </TouchableOpacity>
  </ThemedView>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
});

export default SearchBar;
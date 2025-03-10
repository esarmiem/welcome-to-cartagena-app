import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from "@/components/ThemedText";

const categories = ['Restaurantes', 'Masajes', 'Chivas', 'Carpas', 'Bares', 'Discotecas'];

const CategoryScroll: React.FC = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryButton}>
        <ThemedText style={styles.categoryText}>{category}</ThemedText>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  categoryScroll: {
    marginBottom: 16,
  },
  categoryButton: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: '#fe961b',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
});

export default CategoryScroll;
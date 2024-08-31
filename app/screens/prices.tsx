import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image, ImageSourcePropType } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ThemedTextInput from "@/components/ThemedTextInput";
import FlexibleParallaxScrollView from "@/components/FlexibleParallaxScrollView";

interface TravelCardProps {
  image: ImageSourcePropType;
  title: string;
  price: string;
}

const TravelCard: React.FC<TravelCardProps> = ({ image, title, price }) => (
  <ThemedView style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <ThemedText style={styles.cardTitle}>{title}</ThemedText>
    <ThemedView>
    <ThemedText style={styles.cardPrice}>${price}</ThemedText>
    <TouchableOpacity style={styles.addButton}>
      <Ionicons name="add-circle-outline" size={24} color="#fe961b" />
    </TouchableOpacity>
    </ThemedView>
  </ThemedView>
);

interface DestinationCardProps {
  image: ImageSourcePropType;
  title: string;
  rating: string;
  reviews: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, rating, reviews }) => (
  <ThemedView style={styles.destinationCard}>
    <Image source={image} style={styles.destinationImage} />
    <ThemedText style={styles.destinationTitle}>{title}</ThemedText>
    <ThemedView style={styles.ratingContainer}>
      <Ionicons name="star" size={16} color="#fe961b" />
      <ThemedText style={styles.rating}>{rating}</ThemedText>
      <ThemedText style={styles.reviews}>({reviews})</ThemedText>
    </ThemedView>
  </ThemedView>
);

const prices: React.FC = () => {
  return (
    <FlexibleParallaxScrollView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.greeting}>Lista de precios sugeridos</ThemedText>
        
        <ThemedView style={styles.inputContainer}>
          <ThemedTextInput
            style={styles.input}
            placeholder="Busca un servicio o actividad..."
          />
          <TouchableOpacity>
            <Ionicons name="search-circle" size={35} color="#fe961b" />
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>Restaurantes</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>Masajes</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>Chivas</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>Carpas</ThemedText>
          </TouchableOpacity>
        </ScrollView>

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Carpas playa</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.seeMore}>Ver mas {'>'}</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
          <TravelCard
            image={require('@/assets/images/ctg3.png')}
            title="Bocagrande, Cartagena"
            price="60.000"
          />
          <TravelCard
            image={require('@/assets/images/ctg4.png')}
            title="Playa bonita, Baru"
            price="100.000"
          />
        </ScrollView>

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Recomendados </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.seeMore}>Ver mas {'>'}</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationScroll}>
          <DestinationCard
            image={require('@/assets/images/ctg1.png')}
            title="Pescado frito, Castillo grande"
            rating="5.0"
            reviews="12+"
          />
          <DestinationCard
            image={require('@/assets/images/ctg2.png')}
            title="Coctel de camaron, Centro"
            rating="4.8"
            reviews="50+"
          />
        </ScrollView>
      </ThemedView>
    </FlexibleParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
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
  categoryScroll: {
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: '#fe961b',
  },
  cardScroll: {
    marginBottom: 16,
  },
  card: {
    width: 200,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  cardPrice: {
    fontSize: 14,
    margin: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  destinationScroll: {
    marginBottom: 16,
  },
  destinationCard: {
    width: 150,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  destinationImage: {
    width: '100%',
    height: 100,
  },
  destinationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  rating: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  reviews: {
    marginLeft: 4,
    color: '#888',
  },
});

export default prices;
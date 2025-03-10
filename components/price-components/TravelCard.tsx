import { StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

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

const styles = StyleSheet.create({
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
});

export default TravelCard;
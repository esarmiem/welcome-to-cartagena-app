import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

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

const styles = StyleSheet.create({
  destinationCard: {
    width: 160,
    height: 180,
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

export default DestinationCard;
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FlexibleParallaxScrollView from "@/components/FlexibleParallaxScrollView";
import TravelCard from "@/components/price-components/TravelCard";
import DestinationCard from "@/components/price-components/DestinationCard";
import SearchBar from "@/components/price-components/SearchBar";
import CategoryScroll from "@/components/price-components/CategoryScroll";

const prices: React.FC = () => {
  return (
    <FlexibleParallaxScrollView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.greeting}>Lista de precios sugeridos</ThemedText>
        
        <SearchBar />
        <CategoryScroll />

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Recomendados </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.seeMore}>Ver mas {'>'}</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationScroll}>
          <DestinationCard
            image={require('@/assets/images/prices-images/pescadofritocg.png')}
            title="Pescado frito"
            rating="5.0"
            reviews="12+"
          />
          <DestinationCard
            image={require('@/assets/images/prices-images/coctelcamaron.jpg')}
            title="Coctel de camaron"
            rating="4.8"
            reviews="50+"
          />
          <DestinationCard
            image={require('@/assets/images/prices-images/arepadehuevo.jpg')}
            title="Arepa de huevo"
            rating="4.9"
            reviews="37+"
          />
        </ScrollView>

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Carpas playa</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.seeMore}>Ver mas {'>'}</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
          <TravelCard
            image={require('@/assets/images/prices-images/carpabocagrande.jpeg')}
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
          <ThemedText style={styles.sectionTitle}>Masajes </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.seeMore}>Ver mas {'>'}</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
          <TravelCard
            image={require('@/assets/images/prices-images/masajebocagrande.jpg')}
            title="Bocagrande, Cartagena"
            price="60.000"
          />
          <TravelCard
            image={require('@/assets/images/prices-images/masajecastillo.jpg')}
            title="Castillo grande, Cartagena"
            price="100.000"
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
  destinationScroll: {
    marginBottom: 16,
  },
});

export default prices;
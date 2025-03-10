import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Linking, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Definición de tipos para lugares
interface Place {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  imageUrl: string;
  link?: string;
}

// Datos de ejemplo para las categorías
const RESTAURANTS: Place[] = [
  {
    id: "r1",
    name: "La Cevichería",
    description: "Famoso restaurante de mariscos visitado por Anthony Bourdain. Ofrece ceviches frescos y platos del mar.",
    address: "Calle Stuart 7-14, Cartagena",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPEzvXWTPuPGrl6Ah6izO8JqE4ndLuKgfXA&s",
    link: "https://www.instagram.com/lacevicheriacartagena/",
  },
  {
    id: "r2",
    name: "Carmen",
    description: "Cocina de autor con ingredientes locales. Uno de los mejores restaurantes de Cartagena con ambiente elegante.",
    address: "Calle del Cuartel 36-77, Cartagena",
    rating: 4.9,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF34YB9_nsW1_5t3OcrXOEoHQz-gPAa8Jn9w&s",
    link: "https://www.carmenrestaurante.com.co/",
  },
  {
    id: "r3",
    name: "Juan del Mar",
    description: "Gastronomía caribeña e internacional en el corazón del centro histórico con terraza agradable.",
    address: "Plaza San Diego, Cartagena",
    rating: 4.5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlAhpcTAPYR7Y-jaC58TnM3G2yLLLnYaiTQ&s",
  },
];

const ARTESANIAS: Place[] = [
  {
    id: "a1",
    name: "Las Bóvedas",
    description: "Antiguas celdas convertidas en tiendas de artesanías. Encontrarás souvenirs, tejidos, joyería y arte local.",
    address: "Calle Santa Clara, Cartagena",
    rating: 4.6,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2EKMksbGgLBs6_myMgDq9ZVfqzs5gZXNLw&s",
  },
  {
    id: "a2",
    name: "Portal de los Dulces",
    description: "Tradicional mercado de dulces típicos colombianos en el centro histórico.",
    address: "Plaza de los Coches, Cartagena",
    rating: 4.4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6rLST6jw80JeYpzfrNqZ2yGmhnrN_BPgKQ&s",
  },
];

const DISCOTECAS: Place[] = [
  {
    id: "d1",
    name: "Café del Mar",
    description: "Bar lounge con espectaculares vistas al atardecer sobre la muralla histórica.",
    address: "Baluarte de Santo Domingo, Cartagena",
    rating: 4.5,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/73/54/12/sunset.jpg?w=900&h=500&s=1",
    link: "https://www.cafedelmarcartagena.com/",
  },
  {
    id: "d2",
    name: "Eivissa",
    description: "Club nocturno con música electrónica y ambiente sofisticado en Getsemaní.",
    address: "Calle 24 #8B-42, Cartagena",
    rating: 4.3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy24WsnrEOZ1j-qTVZeLA-WFIauI6oc-sK0A&s",
  },
];

const EVENTOS: Place[] = [
  {
    id: "e1",
    name: "Festival Internacional de Cine de Cartagena",
    description: "Uno de los festivales de cine más antiguos de Latinoamérica, celebrado anualmente en marzo.",
    address: "Varios lugares en Cartagena",
    rating: 4.8,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SeFu_WzCTH_I1nS1ru32a2T3h_sLM3C7JQ&s",
    link: "https://ficcifestival.com/",
  },
  {
    id: "e2",
    name: "Fiestas de Independencia",
    description: "Celebración de la independencia de Cartagena con desfiles, música y bailes en noviembre.",
    address: "Centro histórico, Cartagena",
    rating: 4.7,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrm1WSkGmt7PiPQEbHyf6nol94SPqJI45D_Q&s",
  },
];

// Componente para mostrar estrellas de calificación
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return (
    <View style={styles.ratingContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <Ionicons key={`full-${i}`} name="star" size={16} color="#FFD700" />
      ))}
      {halfStar && <Ionicons name="star-half" size={16} color="#FFD700" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Ionicons key={`empty-${i}`} name="star-outline" size={16} color="#FFD700" />
      ))}
      <ThemedText style={styles.ratingText}>{rating.toFixed(1)}</ThemedText>
    </View>
  );
};

// Componente para mostrar cada lugar
const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <View style={styles.placeCard}>
      <Image 
        source={{ uri: place.imageUrl }} 
        style={styles.placeImage} 
      />
      <View style={styles.placeInfo}>
        <ThemedText type="defaultSemiBold" style={styles.placeName}>{place.name}</ThemedText>
        <RatingStars rating={place.rating} />
        <ThemedText style={styles.placeAddress}>
          <Ionicons name="location-outline" size={14} /> {place.address}
        </ThemedText>
        <ThemedText style={styles.placeDescription}>{place.description}</ThemedText>
        
        {place.link && (
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={() => Linking.openURL(place.link!)}
          >
            <Ionicons name="globe-outline" size={16} color="#fff" />
            <ThemedText style={styles.linkButtonText}>Visitar sitio</ThemedText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fe961b", dark: "#fe961b" }}
      headerImage={
        <Image
          source={require('@/assets/images/bannerlogos.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tiendas y Lugares</ThemedText>
        <ThemedText type="defaultSemiBold">
          Descubre lo mejor de Cartagena
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.collapsibleContainer}>
        <Collapsible 
          title={
            <View style={styles.categoryHeader}>
              <Ionicons name="restaurant-outline" size={24} color="#fe961b" />
              <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>Restaurantes</ThemedText>
            </View>
          }
        > 
          {RESTAURANTS.map(restaurant => (
            <PlaceCard key={restaurant.id} place={restaurant} />
          ))}
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>Ver todos los restaurantes</ThemedText>
            <Ionicons name="arrow-forward" size={16} color="#fe961b" />
          </TouchableOpacity>
        </Collapsible>
        
        <Collapsible 
          title={
            <View style={styles.categoryHeader}>
              <FontAwesome5 name="paint-brush" size={20} color="#fe961b" />
              <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>Artesanías</ThemedText>
            </View>
          }
        > 
          {ARTESANIAS.map(artesania => (
            <PlaceCard key={artesania.id} place={artesania} />
          ))}
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>Ver todas las tiendas de artesanías</ThemedText>
            <Ionicons name="arrow-forward" size={16} color="#fe961b" />
          </TouchableOpacity>
        </Collapsible>
        
        <Collapsible 
          title={
            <View style={styles.categoryHeader}>
              <Ionicons name="musical-notes-outline" size={24} color="#fe961b" />
              <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>Discotecas</ThemedText>
            </View>
          }
        >
          {DISCOTECAS.map(discoteca => (
            <PlaceCard key={discoteca.id} place={discoteca} />
          ))}
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>Ver todas las discotecas</ThemedText>
            <Ionicons name="arrow-forward" size={16} color="#fe961b" />
          </TouchableOpacity>
        </Collapsible>
        
        <Collapsible 
          title={
            <View style={styles.categoryHeader}>
              <Ionicons name="calendar-outline" size={24} color="#fe961b" />
              <ThemedText type="defaultSemiBold" style={styles.categoryTitle}>Eventos</ThemedText>
            </View>
          }
        >
          {EVENTOS.map(evento => (
            <PlaceCard key={evento.id} place={evento} />
          ))}
          <TouchableOpacity style={styles.viewAllButton}>
            <ThemedText style={styles.viewAllText}>Ver todos los eventos</ThemedText>
            <Ionicons name="arrow-forward" size={16} color="#fe961b" />
          </TouchableOpacity>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
    marginBottom: 20,
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    resizeMode: 'contain',
    marginTop: 32,
    alignSelf: 'center',
    position: 'absolute',
  },
  collapsibleContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
    marginTop: 20,
    paddingHorizontal: 12,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  categoryTitle: {
    fontSize: 18,
  },
  placeCard: {
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff10',
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  placeImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  placeInfo: {
    padding: 15,
  },
  placeName: {
    fontSize: 18,
    marginBottom: 5,
  },
  placeAddress: {
    fontSize: 14,
    marginVertical: 5,
    color: '#999',
  },
  placeDescription: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 12,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#FFD700',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe961b',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 5,
    gap: 8,
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  viewAllText: {
    color: '#fe961b',
    marginRight: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});
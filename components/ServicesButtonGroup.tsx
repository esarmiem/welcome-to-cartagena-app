import React from 'react';
import { TouchableOpacity, StyleSheet, ImageBackground, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

// Asumiendo que las imágenes están almacenadas localmente o en un directorio accesible
//@ts-ignore
import chivasImage from '../assets/images/chivas.jpg';
//@ts-ignore
import carpasImage from '../assets/images/carpas.jpg';
//@ts-ignore
import masajeImage from '../assets/images/masajes.jpg';
//@ts-ignore
import guiaTuristicoImage from '../assets/images/guia.jpg';

const ServicesButtonGroup = () => {
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <ImageBackground source={chivasImage} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Chivas</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <ImageBackground source={carpasImage} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Carpas</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <ImageBackground source={masajeImage} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Masaje</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.imageContainer}>
          <ImageBackground source={guiaTuristicoImage} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <Text style={styles.text}>Guía</Text>
            <Text style={styles.text}>Turístico</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden', 
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cubre toda la imagen
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Color negro con 30% de opacidad
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ServicesButtonGroup;

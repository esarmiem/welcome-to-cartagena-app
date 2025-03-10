import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import  ButtonGroup  from '@/components/ButtonGroup';
import ServicesButtonGroup from '@/components/ServicesButtonGroup';
import CarouselNative from '@/components/CarouselNative';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fe961b', dark: '#fe961b' }}
      headerImage={
        <Image
          source={require('@/assets/images/bannerlogos.png')}
          style={styles.reactLogo}
        />
      }>
      <ButtonGroup />
      <ThemedView style={styles.HellowContainer}>
        <ThemedText type="defaultSemiBold">Bienvenid@</ThemedText>
        <ThemedText type="defaultSemiBold">A Cartagena de Indias</ThemedText>
        <HelloWave />
      </ThemedView>
      <CarouselNative />
      <ThemedView style={styles.HellowContainer}>
        <ThemedText type="defaultSemiBold">Servicios Frecuentes 🏖️</ThemedText>
      </ThemedView>
      <ServicesButtonGroup />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  HellowContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    resizeMode: 'contain',
    marginTop: 32,
    alignSelf: 'center',
    position: 'absolute',
  },
});

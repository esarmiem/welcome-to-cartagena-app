import { Image, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import  ButtonGroup  from '@/components/ButtonGroup';
import CarouselHome from '@/components/CarouselHome';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import ServicesButtonGroup from '@/components/ServicesButtonGroup';

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
      <ThemedView style={styles.SearchContainer}>
        <TextInput
          placeholder="Pregunta a tu asistente virtual"
          style={styles.Search}
        >  
        </TextInput>
        <TouchableOpacity>
        <TabBarIcon name={'search-circle-sharp'} color={'#fe961b'}  size={36}/>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.HellowContainer}>
        <ThemedText type="defaultSemiBold">¡Bienvenid@!</ThemedText>
        <ThemedText type="defaultSemiBold">A Cartagena de Indias</ThemedText>
        <HelloWave />
      </ThemedView>
      <ButtonGroup />
      <CarouselHome />
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
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  Search: {
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '80%',
    maxWidth: 300,
    flex: 1,
    fontSize: 16,
  },
});

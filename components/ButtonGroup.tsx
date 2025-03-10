import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const ButtonGroup = () => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={() => router.push('/screens/prices')}>
        <LinearGradient
          colors={['#fe961b', '#fed603']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <TabBarIcon name="cash" size={30} />
          <Text style={styles.text}>Precios</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => router.push('/screens/scanner')}>
        <LinearGradient
          colors={['#fe961b', '#fed603']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <TabBarIcon name="qr-code" size={30} />
          <Text style={styles.text}>Lector QR</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => router.push('/screens/mapview')}>
        <LinearGradient
          colors={['#fe961b', '#fed603']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <TabBarIcon name="map" size={30} />
          <Text style={styles.text}>Mapa</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
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
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 11,
    fontWeight: 'bold',
    paddingTop: 8,
  },
});

export default ButtonGroup;
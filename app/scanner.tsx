import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(true);
  const [isWebBrowserOpen, setIsWebBrowserOpen] = useState(false);
  const scanTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleCameraFacing = useCallback(() => {
    setIsFrontCamera(current => !current);
  }, []);

  const handleBarCodeScanned = useCallback(async ({ type, data }: { type: string; data: string }) => {
    if (!isScanning || isWebBrowserOpen) return;

    console.log(`Scanned ${type} code ${data}`);
    setIsScanning(false);
    setIsWebBrowserOpen(true);

    try {
      if (await Linking.canOpenURL(data)) {
        await WebBrowser.openBrowserAsync(data);
        console.log('WebBrowser closed');
      } else {
        Alert.alert('Error', 'La URL escaneada no es válida o no puede ser abierta.');
      }
    } catch (error) {
      console.error('Error al procesar el código QR:', error);
      Alert.alert('Error', 'Ocurrió un problema al procesar el código QR.');
    } finally {
      setIsWebBrowserOpen(false);
      // Configurar un temporizador para reactivar el escáner después de 2 segundos
      scanTimeoutRef.current = setTimeout(() => {
        setIsScanning(true);
      }, 2000);
    }
  }, [isScanning, isWebBrowserOpen]);

  useEffect(() => {
    return () => {
      // Limpiar el temporizador cuando el componente se desmonta
      if (scanTimeoutRef.current) {
        clearTimeout(scanTimeoutRef.current);
      }
    };
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos su permiso para mostrar la cámara.</Text>
        <Button onPress={requestPermission} title="Otorgar permiso" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={isFrontCamera ? 'front' : 'back'}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={isScanning && !isWebBrowserOpen ? handleBarCodeScanned : undefined}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Cambiar Cámara</Text>
          </TouchableOpacity>
        </View>
        {(!isScanning || isWebBrowserOpen) && (
          <View style={styles.scanningPausedContainer}>
            <Text style={styles.scanningPausedText}>Escaneo pausado</Text>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scanningPausedContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanningPausedText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
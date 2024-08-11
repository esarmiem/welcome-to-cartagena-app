import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const scanAreaSize = SCREEN_WIDTH * 0.8; // Tamaño del área de escaneo
const cornerSize = 20; // Tamaño de cada esquina
const cornerThickness = 4; // Grosor de las líneas de las esquinas

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
      scanTimeoutRef.current = setTimeout(() => {
        setIsScanning(true);
      }, 2000);
    }
  }, [isScanning, isWebBrowserOpen]);

  useEffect(() => {
    return () => {
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
        <View style={styles.scanAreaContainer}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>
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
  scanAreaContainer: {
    position: 'absolute',
    top: (SCREEN_HEIGHT - scanAreaSize) / 2.5,
    left: (SCREEN_WIDTH - scanAreaSize) / 2,
    width: scanAreaSize,
    height: scanAreaSize,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: cornerSize,
    height: cornerSize,
    borderTopWidth: cornerThickness,
    borderLeftWidth: cornerThickness,
    borderColor: 'white',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: cornerSize,
    height: cornerSize,
    borderTopWidth: cornerThickness,
    borderRightWidth: cornerThickness,
    borderColor: 'white',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: cornerSize,
    height: cornerSize,
    borderBottomWidth: cornerThickness,
    borderLeftWidth: cornerThickness,
    borderColor: 'white',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: cornerSize,
    height: cornerSize,
    borderBottomWidth: cornerThickness,
    borderRightWidth: cornerThickness,
    borderColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fe961b',
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
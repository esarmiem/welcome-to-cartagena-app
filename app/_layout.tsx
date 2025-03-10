import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme || "light"];

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="screens/mapview"
          options={{
            headerTitle: "Mapa de Cartagena",
            headerBackTitle: "Volver",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "bold",
              color: colors.text,
            },
          }}
        />
        <Stack.Screen
          name="screens/scanner"
          options={{
            headerTitle: "Escanear QR",
            headerBackTitle: "Volver",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "bold",
              color: colors.text,
            },
          }}
        />
        <Stack.Screen
          name="screens/prices"
          options={{
            headerTitle: "",
            headerBackTitle: "Volver",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: "bold",
              color: colors.text,
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

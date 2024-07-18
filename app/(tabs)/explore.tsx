import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

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
          Consulta lugares para visitar en Cartagena.
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.collapsibleContainer}>
        <Collapsible title="🍲 Restaurantes"> 
          <ThemedText>
            This app has two screens:{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            and{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
          </ThemedText>
          <ThemedText>
            The layout file in{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{" "}
            sets up the tab navigator.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="🎭 Artesanías"> 
          <ThemedText>
            You can open this project on Android, iOS, and the web. To open the
            web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
            in the terminal running this project.
          </ThemedText>
        </Collapsible>
        <Collapsible title="🪇 Discotecas ">
          <ThemedText>
            For static images, you can use the{" "}
            <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
            <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
            provide files for different screen densities
          </ThemedText>
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={{ alignSelf: "center" }}
          />
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="🎊 Eventos">
          <ThemedText>
            Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
            to see how to load{" "}
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              custom fonts such as this one.
            </ThemedText>
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignSelf: "center",
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
    gap: 50,
    marginTop: 50,
  },
});

import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ButtonSettingGroup from "@/components/ButtonSettingGroup";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fe961b", dark: "#fe961b" }}
      headerImage={
        <Image
          source={require("@/assets/images/profile.jpg")}
          style={styles.profilePic}
        />
      }
    >
      <ThemedView style={styles.ProfileText}>
        <ThemedText type="title">Jhon Doe</ThemedText>
        <ThemedText type="defaultSemiBold">
          @jhon_doe • 🇺🇸
        </ThemedText>
      </ThemedView>
      <ButtonSettingGroup />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    height: 110,
    width: 110,
    resizeMode: "cover",
    marginTop: 80,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 100,
  },
  ProfileText: {
    alignSelf: "center",
    textAlign: "center",
  },
});

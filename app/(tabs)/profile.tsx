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
          source={require("@/assets/images/profile.jpeg")}
          style={styles.profilePic}
        />
      }
    >
      <ThemedView style={styles.ProfileText}>
        <ThemedText type="title">Elder Sarmiento</ThemedText>
        <ThemedText type="defaultSemiBold">
          @eldersarmiento • Colombia 🇨🇴
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
  },
});

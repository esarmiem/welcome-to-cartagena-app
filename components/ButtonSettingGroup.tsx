import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Switch } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const ButtonSettingGroup = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="defaultSemiBold">Ajustes de la cuenta</ThemedText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 1 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="person" size={20} />
              <Text style={styles.text}>Editar Perfil</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 2 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="lock-open" size={20} />
              <Text style={styles.text}>Cambiar contraseña</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="notifications" size={20} />
              <Text style={styles.text}>Notificaciones</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="moon" size={20} />
              <Text style={styles.text}>Modo Oscuro</Text>
            </View>
            <Switch
              trackColor={{ false: "#F6F2FA", true: "#fed603" }}
              thumbColor={"#000"}
              ios_backgroundColor="#fff"
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <ThemedText type="defaultSemiBold">Otros Ajustes</ThemedText>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="language" size={20} />
              <Text style={styles.text}>Lenguaje</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="shield" size={20} />
              <Text style={styles.text}>Privacidad</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <View style={styles.contentContainer}>
            <View style={styles.leftContent}>
              <TabBarIcon name="help-circle" size={20} />
              <Text style={styles.text}>Ayuda</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Botón 3 presionado")}
      >
        <LinearGradient
          colors={["#fe961b", "#fed603"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <Text style={styles.logOutText}>Cerrar Sesión</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 36,
    borderRadius: 10,
    /*shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,*/
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  logOutText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ButtonSettingGroup;

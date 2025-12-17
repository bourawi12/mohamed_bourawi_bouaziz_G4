import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/pattern.png")}
      style={styles.container}
    >
      <Image
        source={require("../../assets/bootsplash/logosss.png")}
        style={styles.image}
      />

      <Text style={styles.title}>
        Coffee so good,{"\n"}your taste buds{"\n"}will love it
      </Text>

      <Text style={styles.subtitle}>
        The best grain, the finest roast, the most powerful flavor.
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 60,
  },
  image: {
    width: 450,
    height: 450,
    resizeMode: "contain",
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#eee",
    marginVertical: 10,
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#00512C",
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

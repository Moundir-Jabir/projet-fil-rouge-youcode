import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

import colors from "../styles/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" color={colors.red} />
        <AppButton title="Register" color={colors.green} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    width: "100%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 20,
  },
});

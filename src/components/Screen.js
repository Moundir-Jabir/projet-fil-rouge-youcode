import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../styles/colors";

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.greyBackground,
  },
});

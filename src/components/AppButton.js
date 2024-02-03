import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../styles/colors";

const AppButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginTop: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
  },
});

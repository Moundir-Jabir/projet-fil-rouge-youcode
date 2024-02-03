import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import colors from "../styles/colors";

const MenuItem = ({ name, color, size, background, title }) => {
  return (
    <View style={styles.container}>
      <Icon name={name} color={color} size={size} background={background} />
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginLeft: 10,
    fontWeight: "500",
  },
});

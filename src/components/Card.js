import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import colors from "../styles/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.green,
    fontWeight: "bold",
  },
});

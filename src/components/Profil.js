import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../styles/colors";

const Profil = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 20,
    backgroundColor: "white",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});

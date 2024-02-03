import { Image, StyleSheet, View } from "react-native";

import colors from "../styles/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.listItem}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontWeight: "500",
    fontSize: 22,
  },
  subTitle: {
    color: colors.green,
    fontWeight: "bold",
    fontSize: 20,
  },
  listItem: {
    marginTop: 40,
  },
});

import { Image, StyleSheet, View } from "react-native";
import { baseURL } from "../api/client";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

const ListingDetailScreen = ({ route }) => {
  const { title, price, _id } = route.params;
  let imageUrl = `${baseURL}/listings/image/${_id}/0`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{price} $</AppText>
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

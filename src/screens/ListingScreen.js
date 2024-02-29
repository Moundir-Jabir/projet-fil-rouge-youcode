import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const ListingScreen = ({ navigation }) => {
  const listings = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: "$100",
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great condition",
      price: "$1000",
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetail", item)}
          />
        )}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  separator: {
    height: 20,
  },
});

import { View, StyleSheet, FlatList } from "react-native"
import Screen from "../components/Screen"
import Card from "../components/Card";

const ListingScreen = () => {
    const listings = [
      {
        id: 1,
        title: "Red jacket for sale",
        subTitle: "$100",
        image: require("../assets/jacket.jpg")
      },
      {
        id: 2,
        title: "Couch in great condition",
        subTitle: "$1000",
        image: require("../assets/couch.jpg")
      },
    ];
  return (
    <Screen>
    <View style={styles.flatlistContainer}>
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <Card title={item.title} subTitle={item.subTitle} image={item.image}/>
      )}
      ItemSeparatorComponent={<View style={styles.separator}></View>}
    />
    </View>
    </Screen>
  )
}

export default ListingScreen

const styles = StyleSheet.create({
    flatlistContainer: {
        marginHorizontal: 20,
    },
    separator: {
        height: 20,
    }
})
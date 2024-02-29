import { FlatList, StyleSheet, View } from "react-native";
import Profil from "../components/Profil";
import Screen from "../components/Screen";
import colors from "../config/colors";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const MyAccountScreen = ({ navigation }) => {
  const menus = [
    {
      id: 1,
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        background: colors.red,
      },
    },
    {
      id: 2,
      title: "My Messages",
      icon: {
        name: "email",
        background: colors.green,
      },
      targetScreen: "Messages",
    },
  ];

  return (
    <Screen style={styles.container}>
      <Profil
        image={require("../assets/mosh.jpg")}
        title={"Mosh Hamedani"}
        subTitle="programing@gmail.com"
      />
      <View style={styles.flatlistContainer}>
        <FlatList
          data={menus}
          keyExtractor={(menus) => menus.id.toString()}
          renderItem={({ item }) => (
            <MenuItem
              name={item.icon.name}
              background={item.icon.background}
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <MenuItem name="logout" background="#ffe66d" title="Log Out" />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyBackground,
  },
  flatlistContainer: {
    marginVertical: 20,
  },
});

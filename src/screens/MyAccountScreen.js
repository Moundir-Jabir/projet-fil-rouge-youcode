import { FlatList, StyleSheet } from "react-native";
import Profil from "../components/Profil";
import Screen from "../components/Screen";
import colors from "../styles/colors";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/ListItemSeparator";

const MyAccountScreen = () => {
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
    },
  ];

  return (
    <Screen>
      <Profil
        image={require("../assets/mosh.jpg")}
        title={"Mosh Hamedani"}
        subTitle="programing@gmail.com"
      />
      <FlatList
        style={styles.flatlistContainer}
        data={menus}
        keyExtractor={(menus) => menus.id.toString()}
        renderItem={({ item }) => (
          <MenuItem
            name={item.icon.name}
            background={item.icon.background}
            title={item.title}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <MenuItem name="logout" background="#ffe66d" title="Log Out" />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  flatlistContainer: {
    marginVertical: 20,
    flex: 1,
  },
});

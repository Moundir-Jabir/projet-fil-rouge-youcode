import { FlatList, StyleSheet, View } from "react-native";
import Profil from "../components/Profil";
import Screen from "../components/Screen";
import colors from "../config/colors";
import MenuItem from "../components/MenuItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import useUser from "../hooks/useUser";
import { baseURL } from "../api/client";

const MyAccountScreen = ({ navigation }) => {
  const user = useUser();
  const dispatch = useDispatch();
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
  let imageUrl = `${baseURL}/user/image/${user._id}`;
  return (
    <Screen style={styles.container}>
      <Profil
        image={{ uri: imageUrl }}
        title={user.name}
        subTitle={user.email}
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
      <MenuItem
        name="logout"
        background="#ffe66d"
        title="Log Out"
        onPress={() => dispatch(logout())}
      />
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

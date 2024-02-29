import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    borderRadius: 40,
    height: 80,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    width: 80,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

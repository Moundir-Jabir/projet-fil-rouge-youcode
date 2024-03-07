import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  const { backgroundColor, icon, name } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={icon}
        color={colors.white}
        size={80}
        background={backgroundColor}
      />
      <AppText style={styles.label}>{name}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    width: 80,
    margin: 20,
  },
  label: {
    textAlign: "center",
    marginTop: 10,
  },
});

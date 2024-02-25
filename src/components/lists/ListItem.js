import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "../AppText";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  showChevrons,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGrey}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              color={colors.medium}
              size={25}
              style={styles.icon}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
});

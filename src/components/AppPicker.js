import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import { useState } from "react";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  width = "100%",
}) => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsvisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={colors.medium}
              size={20}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setIsvisible(false)} />
          <FlatList
            data={items}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            numColumns={numberOfColumns}
            keyExtractor={(item, i) => i}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setSelectedItem(item);
                  setIsvisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
});

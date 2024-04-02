import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import { getCategories } from "../api/categories";
import { useEffect } from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export const CategoryFilter = ({ value, setValue }) => {
  const { data: categories, request: loadCategories } = useApi(getCategories);
  useEffect(() => {
    loadCategories();
  }, []);
  const onPress = (idCategory) => {
    if (value === idCategory) setValue(null);
    else setValue(idCategory);
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(category) => category._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPress(item._id)}
            style={[
              styles.item,
              {
                backgroundColor:
                  value == item._id ? colors.danger : colors.white,
              },
            ]}
          >
            <AppText style={styles.textItem}>{item.name}</AppText>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={<View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20,
  },
  item: {
    borderRadius: 100,
  },
  textItem: {
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  separator: {
    width: 20,
  },
});

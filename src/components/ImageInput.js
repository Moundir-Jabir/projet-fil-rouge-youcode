import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ image, setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <MaterialCommunityIcons name="camera" color={colors.medium} size={45} />
      </TouchableOpacity>
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

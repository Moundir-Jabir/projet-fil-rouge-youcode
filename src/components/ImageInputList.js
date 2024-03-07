import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { useRef } from "react";

const ImageInputList = ({ images, onAddImage, onRemoveImage }) => {
  const ScrollViewRef = useRef();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!result.canceled) {
      onAddImage(result.assets[0]);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        ref={ScrollViewRef}
        horizontal={true}
        onContentSizeChange={() => ScrollViewRef.current.scrollToEnd()}
      >
        {images.map((item, i) => (
          <TouchableOpacity key={i} onPress={() => onRemoveImage(item)}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={45}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
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

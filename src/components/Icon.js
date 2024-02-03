import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, color = "white", size = 40, background = "#000" }) => {
  return (
    <View
      style={{
        backgroundColor: background,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size * 0.5} />
    </View>
  );
};

export default Icon;

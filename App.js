import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import ListingScreen from "./src/screens/ListingScreen";
import Screen from "./src/components/Screen";
import AppTextInput from "./src/components/AppTextInput";
import AppText from "./src/components/AppText";
import AppPicker from "./src/components/AppPicker";
import { useState } from "react";

export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 }
  ]
  const [category, setCategory] = useState(categories[0])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppTextInput icon="email" placeholder="Username" />
        <AppPicker selectedItem={category} setSelectedItem={item => setCategory(item)} items={categories} placeholder="Category" icon="apps"/>
      </Screen>
      <StatusBar barStyle={"dark-content"} />
    </GestureHandlerRootView>
  );
}

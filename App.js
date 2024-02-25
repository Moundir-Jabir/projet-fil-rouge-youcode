import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import ListingScreen from "./src/screens/ListingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
      <StatusBar barStyle={"dark-content"} />
    </GestureHandlerRootView>
  );
}

import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserToken } from "./src/storage";
import { setUserToken } from "./src/redux/auth/authSlice";

export default function Navigation() {
  const token = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const loadUserToken = async () => {
    const UserToken = await getUserToken();
    if (UserToken) dispatch(setUserToken(UserToken));
  };
  useEffect(() => {
    loadUserToken();
  }, []);
  return (
    <NavigationContainer theme={navigationTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {token ? <AppNavigator /> : <AuthNavigator />}
        <StatusBar barStyle={"dark-content"} />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

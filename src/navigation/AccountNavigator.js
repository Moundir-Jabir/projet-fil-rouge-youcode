import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MyAccount">
      <Stack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{ title: "Account" }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

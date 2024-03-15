import Navigation from "./Navigation";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(() => SplashScreen.hideAsync(), 1000);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

import { useFonts } from "expo-font";
import { fonts } from './src/components/Global/fonts';
import { Provider } from "react-redux";
import store from './store'
import MainNavigator from "./src/components/navigation/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
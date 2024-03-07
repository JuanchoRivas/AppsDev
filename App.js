import { useFonts } from "expo-font";
import { fonts } from './src/components/Global/fonts';
import TabNavigator from "./src/components/navigation/TabNavigator";
import { Provider } from "react-redux";
import store from './store'

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) {
    return null;
  }

return (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
)

}
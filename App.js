import { useFonts } from "expo-font";
import { fonts } from './src/components/Global/fonts';
import Navigator from './src/components/navigation/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) {
    return null;
  }

return <Navigator />
}
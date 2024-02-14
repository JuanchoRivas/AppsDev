import { StyleSheet } from 'react-native';

import Home from './src/components/Screens/Home';
import ItemListCategories from './src/components/Screens/ItemListCategories';

export default function App() {

  return (
    <>
    {/*<Home />*/}
    <ItemListCategories category="lighting"/>
    </>

  );
}


const styles = StyleSheet.create({
  
})

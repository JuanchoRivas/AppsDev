import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import { useState } from "react";
import Home from "./src/components/Screens/Home";
import ItemListCategories from './src/components/Screens/ItemListCategories';
import { fonts } from './src/components/Global/fonts';

export default function App() {
  const [ categorySelected, setCategorySelected ] = useState('');

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) {
    return null;
  }

  return (
    <>
  {categorySelected ? (
    <ItemListCategories />
  ) : (
    <Home setCategorySelected={setCategorySelected}/>
  )}
    </>
  
  );
}


const styles = StyleSheet.create({
  
})

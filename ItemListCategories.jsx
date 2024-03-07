import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import ProductItem from "../ProductItem";
import Search from "../Search";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
      (state)=> state.shopReducer.value.productsFilteredByCategory
    );

  useEffect(()=> {
    const productsFiltered = productsFilteredByCategory.filter((product)=> 
    product.title.includes(keyword))
    setProducts(productsFiltered)
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search keyword={keyword} onSearch={setKeyword}/>
      <FlatList 
        data={products}
        renderItem={({item})=> <ProductItem product={item} navigation={navigation}/>}
        keyExtractor={(item)=> item.id}
        />
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})
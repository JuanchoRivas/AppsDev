import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import allProducts from '../data/products.json'
import ProductItem from "../ProductItem";
import Search from "../Search";

function ItemListCategories({category}) {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('');

  useEffect(()=> {
    if(category) {
      const products = allProducts.filter((product)=> product.category === category);
      const filteredProducts = products.filter((product)=> product.title.includes(keyword)
      );
      setProducts(filteredProducts)
    }
  }, []);


  return (
    <View>
      <Search onSearch={setKeyword}/>
      <FlatList 
      data={allProducts}
      renderItem={({item})=> <ProductItem product={item}/>}
      keyExtractor={(item)=> item.id}/>
    </View>
  );
}

export default ItemListCategories;
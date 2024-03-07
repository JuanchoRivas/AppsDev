import { FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";

function Categories({navigation}) {
  const categories = useSelector((state) => state.shopReducer.value.categories)

    return(
      <View style={styles.container}>
        <Counter />
        <FlatList 
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} category={item} />
          )}
            keyExtractor={(category)=> category}
        />
      </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
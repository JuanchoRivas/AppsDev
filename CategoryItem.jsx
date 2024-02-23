import { StyleSheet,  Text, Pressable } from 'react-native'
import Card from './Card';

const CategoryItem = ({category, navigation}) => {
  return (
  <Pressable onPress={()=> navigation.navigate("ItemListCategories", {category})}>
    <Card style={styles.text}>
      <Text style={styles.text}>{category}</Text>
    </Card> 
  </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'InterRegular',
    justifyContent: 'center'
    }
});
import { StyleSheet,  Text, Image, useWindowDimensions, Pressable } from 'react-native'
import Card from './Card';
import { useEffect, useState } from "react";
import { colors } from './Global/colors';

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const{ width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect(()=> {
    if(height > width){
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height])

  return (
    <>
      <Pressable onPress={()=> navigation.navigate("ItemDetail", {id: product.id})}>
        <Card 
          style={{
            marginVertical: 20, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            }}
          >
            <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
            <Image style={styles.image} source={{uri: product.images[0]}}/>
        </Card>
      </Pressable> 
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card:{
    height: 100,
    backgroundColor: colors.blue_300,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4
  },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: '30%',
    borderRadius: 5,
  },
  text: {
    width: '70%',
    fontFamily: 'InterBold',
    fontSize: 20,
  },
  textMin: {
    fontSize: 15,
    width: "70%",
    color: colors.blue_200,
    fontFamily: 'InterBold',
  },
});
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";

const Search = () => {


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TextInput 
          onChangeText={keyword}
          value={input} 
          style={styles.input} 
          placeholder='Buscar producto...'
        />
        <Pressable>
          <AntDesign name="search1" size={25} color="black"/>
        </Pressable>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  input:  {
    borderRadius: 8,
    padding: 10,
    borderWidth :1,
    width: "80%",
    fontSize: 20,
    marginTop: 40
  },
})
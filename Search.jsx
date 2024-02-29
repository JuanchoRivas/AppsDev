import { useState } from "react";
import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "./Global/colors";



const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  
  const handleSearch = () => {
    if (input) {
      onSearch(input);
  }
};

const removeInput = () => {
  setInput("");
};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
        onChangeText={setInput}
        value={input} 
        style={styles.input} 
        placeholder='Buscar producto...'
      />
      <Pressable>
        <AntDesign name="search1" size={25} color="black"/>
      </Pressable>
      <Pressable>
        <Entypo name="circle-with-cross" size={25} color="black" />
      </Pressable>
    </View>
  </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent : "space-between",
    alignItems: "center",
    width: '90%',
    paddingTop: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
  },
  input:  {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
  },
})
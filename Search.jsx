import { useState } from "react";
import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { AntDesign } from "@expo/vector-icons";



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
  inputContainer:  {
    borderRadius: 8,
    padding: 10,
    borderWidth :1,
    width: "80%",
    fontSize: 20,
    marginTop: 40
  },
})
import { useState,  } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { Text,
  Pressable, 
  View, 
  Image, 
  TextInput,  
  StyleSheet,
  FlatList,
  Modal
} from 'react-native';
import cartLogo from "./assets/cart1.png";
import RemoveModal from "./src/components/RemoveModal";

const DATA = [
  {
    name: "Remera",
    id: 1,
  },
  {
    name: "Pantalón",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
];

export default function App() {

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null); 

  const handleAddCounter = () => setCounter(counter + 1)

  const handleInputChange = (value) => setInputValue(value)

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    };
    setCartItems([...cartItems, newItem])
  };

  const removeItem = () => {
    const filteredArray = cartItems.filter((item)=> item.id !== itemSelected)
    setCartItems(filteredArray);
    setModalVisible(false)
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal 
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
      <View style={{
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: 8, 
        alignItems: 'center'
      }}>
        <Text>Carrito</Text>
          <Image style={{width: 50, height: 50}} source={cartLogo} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput onChangeText={handleInputChange} value={inputValue} style={styles.inputStyles} placeholder='Ingrese un producto'
      />
      <Pressable onPress={addItem}>
        <Text style={{fontSize: 40}}>+</Text>
      </Pressable>
    
    </View>
      <View style={styles.product}>
        {/*DATA.map((item)=> (
          <View key={item.id}>
            <Text style={styles.product}>{item.name}</Text>
        </View>
        ))*/}

        <FlatList 
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{width: 400, flexDirection: 'row'}}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={()=> handleModal(item.id)}>
                <Text style={{fontSize: 20, paddingLeft: 10}}>🚮</Text>
              </Pressable>
          </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed', 
    paddingHorizontal: 14, 
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  modalContainer: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  productList: {
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10
  },
  product: {
    fontSize: 16, 
    fontWeight: 'bold', 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10,
  },
  inputStyles: {
    borderColor: 'gray', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 5, 
    width: '90%'
  }
})

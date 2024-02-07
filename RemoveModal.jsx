import { Text,
  Pressable, 
  View, 
  StyleSheet,
  Modal
} from 'react-native';
import { useState,  } from "react";
const RemoveModal = () =>{

  const [modalVisible, setModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [itemSelected, setItemSelected] = useState(null);


  const removeItem = () => {
    const filteredArray = cartItems.filter((item) => item.id !== itemSelected);
    setCartItems(filteredArray);
    setModalVisible(false)
  }
  

  const handleModal = (id) => 
    {setModalVisible(true);
    setItemSelected(id)
    console.log(id);
}

    return (
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text>¿Quieres eliminar el Producto?</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>No</Text>
          </Pressable>
          <Pressable onPress={removeItem}>
            <Text>Sí</Text>
          </Pressable>
        </View>
      </Modal>
    );  
  };

    export default RemoveModal;

    const styles = StyleSheet.create({

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
    });

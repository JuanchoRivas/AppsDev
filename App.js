import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <TouchableNativeFeedback 
      onPress={() => Alert.alert('Hemos tocado el texto!')}
      >
        <Text>Hola, Coder!</Text>
      </TouchableNativeFeedback>
      <Text>Bienvenido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
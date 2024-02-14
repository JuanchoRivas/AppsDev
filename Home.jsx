import { Text, View, StyleSheet } from "react-native";
import Header from "../Header";
import Categories from "../Categories";
function Home () {
    return (
        <View style={styles.title}>
            <Header title={'Inicio'}/>
            <Categories />
            <Text>Inicio</Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    title: {
        flex: 1,
        textAlign: 'center'
    }
})

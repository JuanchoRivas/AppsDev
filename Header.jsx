import { Text, View, StyleSheet } from "react-native";
import { colors } from "./Global/colors";

function Header({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create ({
    container : {
        backgroundColor: colors.blue_300,
        width: "100%",
        paddingVertical: 8
    },
    text: {
        paddingVertical: 10,
        fontSize: 30,
        color: 'white',
        textAlign: "center",
        fontWeight: 'bold'
    }
})
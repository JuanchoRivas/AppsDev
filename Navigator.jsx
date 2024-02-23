import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";

const Navigator = () => {
    const Stack = createNativeStackNavigator() 

    return( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ItemDetail" component={ItemDetail}/>
                <Stack.Screen name="ItemListCategories" component={ItemListCategories}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;

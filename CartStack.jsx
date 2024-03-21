import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from '../src/components/Screens/Cart';
import Header from "../src/components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ header: () => <Header title="Cart" /> }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
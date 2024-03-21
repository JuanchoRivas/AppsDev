import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../src/components/Header";
import Login from "../src/components/Screens/Login";
import Signup from "../src/components/Screens/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{ header: () => <Header title="Welcome" /> }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
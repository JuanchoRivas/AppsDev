import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header";
import Login  from "../Screens/Login";
import Signup from "../Screens/Signup";

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
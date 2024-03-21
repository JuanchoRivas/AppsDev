import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../src/components/Header";
import ImageSelector from "../src/components/Screens/ImageSelector";
import LocationSelector from "../src/components/Screens/LocationSelector";
import MyProfile from "../src/components/Screens/MyProfile";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="My Profile" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
      <Stack.Screen name="Location Selector" component={LocationSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
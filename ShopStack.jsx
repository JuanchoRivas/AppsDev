import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../src/components/Screens/Home';
import ItemDetail from '../src/components/Screens/ItemDetail'
import ItemListCategories from '../src/components/Screens/ItemListCategories'
import Header from "../src/components/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categories"
                    : route.name === "ItemListCategories"
                    ? route.params.category
                    : "Detail"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
  );
};

export default Navigator;
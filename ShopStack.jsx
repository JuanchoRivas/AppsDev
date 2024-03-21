import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";
import Header from "../Header";

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
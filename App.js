import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login";
import Photolist from "./Screens/Photolist";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => {
          return {
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={Photolist}
          options={() => {
            return { tabBarIcon: () => <Icon name="house" size="20" /> };
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={() => {
            return {
              tabBarIcon: () => (
                <Icon name="sc-telegram" type="evilicon" size="20" />
              ),
            };
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});

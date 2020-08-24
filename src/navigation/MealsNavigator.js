import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MealsStack = () => (
  <Stack.Navigator
    mode="modal" // Modal like transition
    initialRouteName="Categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "#fff" : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "#fff", // Title text color
    }}
  >
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ headerTitle: "Meal Categories" }}
    />
    <Stack.Screen name="CategoriesMeals" component={CategoriesMealsScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Meals"
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
        }}
      >
        <Tab.Screen
          name="Meals"
          component={MealsStack}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: (tabInfo) => (
              <Ionicons name="ios-star" size={25} color={tabInfo.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;

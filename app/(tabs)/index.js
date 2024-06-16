import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import CategoryScreen from "../../screens/CategoryScreen";
import FavouriteScreen from "../../screens/FavouriteScreen";
import AppSettingsScreen from "../../screens/AppSettingsScreen";
import HomeIcon from "../../assets/svg/HomeIcon";
import CategoryIcon from "../../assets/svg/CategoryIcon";
import FavouriteIcon from "../../assets/svg/FavouriteIcon";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoryItemScreen from "../../screens/CategoryItemScreen";
import CategoryItemDetailsScreen from "../../screens/CategoryItemDetailsScreen";
import { useState } from "react";
import { FavouriteProvider } from "../../contexts/FavouriteContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home", tabBarIcon: ({ size, color }) => <HomeIcon height={size} width={size} color={color} /> }} />
      <Tab.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: "Categories", tabBarIcon: ({ size, color }) => <CategoryIcon height={size} width={size} color={color} /> }} />
      <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{ title: "Favourite", tabBarIcon: ({ size, color }) => <FavouriteIcon height={size} width={size} color={color} /> }} />
      <Tab.Screen name="AppSettingsScreen" component={AppSettingsScreen} options={{ title: "Settings", tabBarIcon: ({ size, color }) => <SettingsIcon height={size} width={size} color={color} /> }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [loaded] = useFonts({
    "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "poppins-black": require("../../assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return undefined;
  } else {
    return (
      <SafeAreaProvider>
        <FavouriteProvider>
          <NavigationContainer independent={true}>
            <Stack.Navigator>
              <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="CategoryItemScreen" component={CategoryItemScreen} />
              <Stack.Screen name="CategoryItemDetailsScreen" component={CategoryItemDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </FavouriteProvider>
      </SafeAreaProvider>
    );
  }
}

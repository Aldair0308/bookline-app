import React, { useEffect, useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "../hooks/useTheme";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import CurrentScreen from "../screens/CurrentScreen";
import LibraryScreen from "../screens/LibraryScreen";

const BottomTab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const { theme } = useTheme();

  const [showConfigTab, setShowConfigTab] = useState(false);
  const [showCocinaTab, setShowCocinaTab] = useState(false);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.text}
      barStyle={{ backgroundColor: theme.colors.background }}
    >
      <BottomTab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Noticias"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="newspaper" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Leyendo"
        component={CurrentScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-open" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Mis libros"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

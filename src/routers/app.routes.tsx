import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Profile, Ticket } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

export function AppRoutes() {
  const Tab = createBottomTabNavigator();

  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.background,
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            height: 70,
            backgroundColor: theme.colors.dark,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Ticket"
          component={Ticket}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="bus" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

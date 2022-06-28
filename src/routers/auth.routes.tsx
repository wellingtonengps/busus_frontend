import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FirstScreen,
  LoginScreen,
  RegisterScreen,
  RegisterContactScreen,
  RegisterPhotoScreen,
  Home,
} from "../screens";

import { RootStackParamProps } from "./types";

export function AuthRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamProps>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterContactScreen"
          component={RegisterContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPhotoScreen"
          component={RegisterPhotoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

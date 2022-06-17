import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

import { Routes } from "./src/routers";
import { AuthProvider } from "./src/hooks/auth";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <View onLayout={SplashScreen.hideAsync}></View>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

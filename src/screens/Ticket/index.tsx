import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Input, IconButton, Picker } from "../../components";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, Body } from "./styles";

export function Ticket() {
  const theme = useTheme();

  return (
    <Container>
      <Title>Agendamento</Title>
      <Body>
        <Picker />
      </Body>
      <IconButton color={theme.colors.secondary} onPress={() => {}}>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={theme.colors.dark}
        />
      </IconButton>
    </Container>
  );
}

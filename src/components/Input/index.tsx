import React from "react";
import { TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Container, IconContainer, InputText, InputContainer } from "./styles";

interface InputProps extends TextInputProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <Container>
      <InputContainer>
        <IconContainer>
          <Ionicons name={icon} size={25} />
        </IconContainer>
        <InputText {...rest} />
      </InputContainer>
    </Container>
  );
}

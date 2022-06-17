import React from "react";
import { TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Control, Controller } from "react-hook-form";

import {
  Container,
  IconContainer,
  InputText,
  Error,
  InputContainer,
} from "./styles";

interface InputProps extends TextInputProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  control?: Control;
  name: string;
  error?: string;
}

export function InputControl({
  control,
  name,
  error,
  icon,
  ...rest
}: InputProps) {
  return (
    <Container>
      <InputContainer>
        <IconContainer>
          <Ionicons name={icon} size={25} />
        </IconContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputText onChangeText={onChange} value={value} {...rest} />
          )}
          name={name}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

interface IconButtonProps extends TouchableOpacityProps {
  color?: string;
}

export function IconButton({ color, children, ...rest }: IconButtonProps) {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
}

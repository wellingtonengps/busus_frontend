import React from "react";
import { useTheme } from "styled-components";

import { Container, Logo, SubTitle, ButtonContainer, Header } from "./styles";
import logo from "../../assets/logo.png";
import { Button } from "../../components/Button";

//FIXME: tipo de navegacao
export function FirstScreen({ navigation }: any) {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <SubTitle>
          Agende sua passagem de forma{"\n"}simples e grátuita
        </SubTitle>
        <ButtonContainer>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <Button
            title="Criar conta"
            color={theme.colors.shape}
            onPress={() => navigation.navigate("RegisterScreen")}
          />
        </ButtonContainer>
      </Header>
    </Container>
  );
}

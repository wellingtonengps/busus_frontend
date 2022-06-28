import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { Container, Title, SubTitle, InputContainer, Header } from "./styles";
import { IconButton, InputControl } from "../../components";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { RegisterParamsProps } from "../../routers/types";

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});

//FIXME: tipo de navegacao
export function RegisterScreen({ navigation }: RegisterParamsProps) {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [susNumber, setSusNumber] = useState("");

  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleContactScreen() {
    navigation.navigate("RegisterContactScreen", {
      name,
      CPF: parseInt(CPF),
      password,
      susNumber: parseInt(CPF),
    });
  }

  return (
    <Container>
      <Header>
        <Title>Registrar</Title>
        <SubTitle>Crie sua conta</SubTitle>
      </Header>

      <InputContainer>
        <InputControl
          name="name"
          error={errors.name && errors.name.message}
          control={control}
          icon="person"
          placeholder="Name"
          onChangeText={setName}
        />
        <InputControl
          name="CPF"
          error={errors.CPF && errors.CPF.message}
          control={control}
          icon="card"
          placeholder="CPF"
          onChangeText={setCPF}
          keyboardType="numeric"
        />
        <InputControl
          name="susNumber"
          error={errors.susNumber && errors.susNumber.message}
          control={control}
          icon="heart"
          placeholder="Número SUS"
          onChangeText={setSusNumber}
        />
        <InputControl
          name="password"
          error={errors.password && errors.password.message}
          control={control}
          icon="lock-closed"
          placeholder="Senha"
          onChangeText={setPassword}
        />
        <InputControl
          name="passwordConfirmed"
          error={errors.passwordConfirmed && errors.passwordConfirmed.message}
          control={control}
          icon="lock-closed"
          placeholder="Confirmar senha"
          onChangeText={setPassword}
        />
      </InputContainer>

      <IconButton
        color={theme.colors.secondary}
        onPress={() => {
          handleContactScreen();
        }}
      >
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={theme.colors.dark}
        />
      </IconButton>
    </Container>
  );
}

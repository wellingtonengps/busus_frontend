//TODO: implementar a verificação com o yup

import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, InputControl } from "../../components";
import { useAuth } from "../../hooks/auth";
import { Container, Title, SubTitle, InputContainer } from "./styles";

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});

export function LoginScreen() {
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignIn } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Title>Bem-vindo de{"\n"}volta</Title>
      <SubTitle>Entre com sua conta</SubTitle>
      <InputContainer>
        <InputControl
          name="CPF"
          control={control}
          error={errors.CPF && errors.CPF.message}
          icon="person"
          placeholder="CPF"
          onChangeText={setCPF}
        />
        <InputControl
          name="password"
          control={control}
          error={errors.password && errors.password.message}
          icon="lock-closed"
          placeholder="Senha"
          onChangeText={setPassword}
        />
      </InputContainer>
      <Button title="Entrar" onPress={() => handleSignIn(CPF, password)} />
    </Container>
  );
}

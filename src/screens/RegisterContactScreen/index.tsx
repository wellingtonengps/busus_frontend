import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth, User } from "../../hooks/auth";
import * as Yup from "yup";

import { Container, Title, SubTitle, InputContainer, Header } from "./styles";
import { IconButton } from "../../components";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RegisterContactParamsProps } from "../../routers/types";

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});


export function RegisterContactScreen({ route, navigation }: RegisterContactParamsProps) {

  const { CPF, name, password, susNumber } = route.params

  const [phoneNumber, setPhoneNumber] = useState("");

  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handlePhotoScreen() {
    navigation.navigate("RegisterPhotoScreen", {
      phoneNumber: parseInt(phoneNumber),
      name,
      CPF,
      password,
      susNumber,
    });
  }

  return (
    <Container>
      <Header>
        <Title>Registrar</Title>
        <SubTitle>Contato</SubTitle>
      </Header>

      <InputContainer>
        <Input
          //name="contact"
          //error={errors.contact && errors.contact.message}
          //control={control}
          icon="call"
          placeholder="Telefone"
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
        <Input
          //name="contactConfirmed"
          //error={errors.contactConfirmed && errors.contactConfirmed.message}
          //control={control}
          icon="call"
          placeholder="Confirmar Telefone"
          onChangeText={setPhoneNumber}
          keyboardType="numeric"
        />
      </InputContainer>

      <IconButton
        color={theme.colors.secondary}
        onPress={() => {
          handlePhotoScreen();
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

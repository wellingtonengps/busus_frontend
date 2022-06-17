import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  Title,
  SubTitle,
  InputPhoto,
  Header,
  Footer,
} from "./styles";
import { useTheme } from "styled-components";

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});

export function RegisterPhotoScreen({ route }: any) {
  const [photo, setPhoto] = useState("");

  const { user, handleCreateUserAccount } = useAuth();
  const { phoneNumber, name, CPF, password, susNumber } = route.params;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handlePhotoSelectend() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        base64: true,
      });

      if (!result.cancelled) {
        console.log(result.base64);

        setPhoto("12344");
        //setPhoto(result.base64!.toString());
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegister() {
    handleCreateUserAccount({
      name: name,
      CPF: CPF,
      password: password,
      susNumber: susNumber,
      phoneNumber: phoneNumber,
      photo: photo,
    });
  }

  return (
    <Container>
      <Header>
        <Title>Registrar</Title>
        <SubTitle>Foto de Perfil</SubTitle>
      </Header>

      <InputPhoto onPress={() => handlePhotoSelectend()}></InputPhoto>

      <Footer>
        Clique no icone para selecionar ou tirar{"\n"}sua foto de perfil
      </Footer>

      <Button title="Registrar" onPress={() => handleRegister()} />
    </Container>
  );
}

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { useAuth, User } from "../../hooks/auth";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import {
  Container,
  Title,
  SubTitle,
  InputPhoto,
  Header,
  Footer,
  Image,
} from "./styles";
import { useTheme } from "styled-components";
import { RegisterPhotoParamsProps } from "../../routers/types";

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});

export function RegisterPhotoScreen({ route }: RegisterPhotoParamsProps) {
  const [photo, setPhoto] = useState<ImagePicker.ImageInfo>();

  const { user, handleCreateUserAccount } = useAuth();

  const { phoneNumber, name, CPF, password, susNumber, } = route.params

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
      },);
      if (!result.cancelled) {
        setPhoto(result);
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
      photoURI: photo?.uri!,
    });

    console.log(name);

  }



  return (
    <Container>
      <Header>
        <Title>Registrar</Title>
        <SubTitle>Foto de Perfil</SubTitle>
      </Header>

      <InputPhoto onPress={() => handlePhotoSelectend()}>
        <Image source={{ uri: photo?.uri }} />
      </InputPhoto>

      <Footer>
        Clique no icone para selecionar ou tirar{"\n"}sua foto de perfil
      </Footer>

      <Button title="Registrar" onPress={() => handleRegister()} />
    </Container>
  );
}

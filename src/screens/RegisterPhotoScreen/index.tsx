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

const schema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  email: Yup.string().required("E-mail é obrigatório").email(),
});



export function RegisterPhotoScreen({ phoneNumber, name, CPF, password, susNumber }: User) {
  const [photo, setPhoto] = useState<ImagePicker.ImageInfo>();

  const { user, handleCreateUserAccount } = useAuth();

  const formData = new FormData();

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
      },);
      if (!result.cancelled) {
        /*setPhoto(result);

        formData.append("name", "wellington"),
          formData.append("CPF", "14237106659"),
          formData.append("password", "wel1ing7"),
          formData.append("sus_code", "123456789"),
          formData.append("phone_number", "33999938459"),

          */

        formData.append('image',
          JSON.parse(JSON.stringify({ uri: result.uri, type: 'image/png', name: 'image.png' }))
        );

        console.log(formData);

      }
    } catch (error) {
      console.log(error);
    }
  }

  async function uploatProfile() {
    try {
      const response = await fetch(`http://192.168.15.6:3000/profileUpload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }

  }
  /*
  async function handleRegister() {
    handleCreateUserAccount({
      name: name,
      CPF: CPF,
      password: password,
      susNumber: susNumber,
      phoneNumber: phoneNumber,
      photoURI: "teste",
    });
  }*/



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

      <Button title="Registrar" onPress={() => uploatProfile()} />
    </Container>
  );
}

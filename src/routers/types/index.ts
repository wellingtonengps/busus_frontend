import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamProps = {
  FirstScreen: undefined,
  LoginScreen: undefined,
  RegisterScreen: {
    name: string;
    CPF: number;
    password: string;
    susNumber: number;
  },
  RegisterContactScreen: {
    name: string;
    CPF: number;
    password: string;
    susNumber: number;
  }
  RegisterPhotoScreen: {
    phoneNumber: number;
    name: string;
    CPF: number;
    password: string;
    susNumber: number;
  }
}

type RegisterParamsProps = NativeStackScreenProps<RootStackParamProps, "RegisterScreen", "RegisterContactScreen">

type RegisterPhotoParamsProps = NativeStackScreenProps<RootStackParamProps, "RegisterPhotoScreen">;

type RegisterContactParamsProps = NativeStackScreenProps<RootStackParamProps, "RegisterContactScreen">;

export { RootStackParamProps,RegisterPhotoParamsProps, RegisterContactParamsProps, RegisterParamsProps}
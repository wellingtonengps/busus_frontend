import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  margin-top: ${RFValue(35)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const UserGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_sans};
  font-size: 20px;
`;

export const User = styled.View``;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_sans};
  font-size: 20px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(22)}px;
`;

export const Image = styled.Image`
  margin-right: 15px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

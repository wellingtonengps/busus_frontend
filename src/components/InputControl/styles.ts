import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View``;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 21px;

  height: 62px;
  width: 305px;

  border-radius: 15px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const IconContainer = styled.View`
  margin-right: 21px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular_roboto};

  margin-top: -5px;
  margin-left: 5px;
  margin-bottom: 20px;
`;

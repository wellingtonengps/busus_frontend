import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(45)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_sans};
  font-size: ${RFValue(34)}px;
  text-align: center;

  text-transform: uppercase;
`;

export const Body = styled.View`
  margin-top: 42px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_sans};
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
`;

export const WrapperInput = styled.View`
  flex-direction: column;
  margin-bottom: ${RFValue(26)}px;
`;

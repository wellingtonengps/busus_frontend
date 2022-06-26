import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_sans};
  font-size: 36px;
  text-align: center;

  text-transform: uppercase;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 18px;
  text-align: center;

  margin-top: 9px;
`;

export const InputPhoto = styled.TouchableOpacity`
  height: ${RFValue(151)}px;
  width: ${RFValue(151)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 75px;
`;

export const Image = styled.Image`
  
`;

export const Footer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 18px;
  text-align: center;

  margin-top: 9px;
`;

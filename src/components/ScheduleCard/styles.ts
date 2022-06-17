import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { getStatusColor } from "../../utils/getStatusColor";

interface statusProps {
  status: string;
}

export const Container = styled.View`
  height: ${RFValue(187)}px;
  width: ${RFValue(310)}px;

  margin-bottom: 23px;
`;

``;

export const Body = styled.View`
  justify-content: space-between;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;

  padding: ${RFValue(16)}px;
  height: ${RFValue(136)}px;
  width: 100%;

  justify-content: space-between;
`;

export const Footer = styled.View<statusProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ status }) => getStatusColor(status)};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const DateContainer = styled.View`
  justify-content: space-around;
  align-items: center;
`;

export const DayWeek = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_roboto};
  font-size: 20px;

  text-transform: uppercase;
`;

export const Day = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_roboto};
  font-size: 48px;

  text-transform: uppercase;
`;

export const Mother = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_roboto};
  font-size: 20px;

  text-transform: uppercase;
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold_sans};
  color: ${({ theme }) => theme.colors.background};
  font-size: 20px;

  text-transform: uppercase;
`;

export const Locale = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 20px;

  margin-left: 5px;
`;

export const LeftContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const MoreButton = styled.TouchableOpacity`
  position: absolute;
  top: -20px;
  right: -8px;
`;

export const LocaleContainer = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  justify-content: flex-start;
  align-items: center;
  margin-top: 185px;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-family: ${({ theme }) => theme.fonts.extrabold_sans};
`;

export const Logo = styled.Image``;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 18px;
  text-align: center;

  margin-top: 32px;
`;

export const ButtonContainer = styled.View`
  margin-top: 154px;
  align-items: center;
`;

export const SocialContainer = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-evenly;
`;

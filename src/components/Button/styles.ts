import styled from "styled-components/native";

interface ButtonProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: 62px;
  width: 305px;
  border-radius: 15px;
  margin-bottom: 15px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular_roboto};

  text-transform: uppercase;
`;

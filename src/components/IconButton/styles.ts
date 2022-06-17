import styled from "styled-components/native";

interface IconButtonProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<IconButtonProps>`
  height: 50px;
  width: 50px;

  justify-content: center;
  align-items: center;
  border-radius: 25px;

  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.secondary};
`;

export const Title = styled.Text``;

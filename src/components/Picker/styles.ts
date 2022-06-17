import styled from "styled-components/native";

interface PropsPicker {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList``;

export const ItemContainer = styled.TouchableOpacity<PropsPicker>`
  height: 62px;
  width: 82px;

  justify-content: center;
  align-items: center;
  margin-left: 15px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.shape};
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular_roboto};
  font-size: 20px;
`;

import React, { useState } from "react";

import { Container, List, ItemContainer, Title } from "./styles";

const months = ["Jan", "Feb", "Mar", "Abr", "May", "Jun"];

export function Picker() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <Container>
      <List
        horizontal
        data={months}
        renderItem={(item) => (
          <ItemContainer active={isActive} onPress={handleActive}>
            <Title>{item.item}</Title>
          </ItemContainer>
        )}
      />
    </Container>
  );
}

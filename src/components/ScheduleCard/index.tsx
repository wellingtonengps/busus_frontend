import { Feather } from "@expo/vector-icons";
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Container,
  DateContainer,
  DayWeek,
  Day,
  Mother,
  Footer,
  Status,
  Locale,
  Body,
  LeftContainer,
  LocaleContainer,
  MoreButton,
} from "./styles";

interface DateProps {
  dayWeek: string;
  day: string;
  mother: string;
}

interface ScheduleCardProps {
  date: string;
  locale: string;
  status?: "confirmado" | "analise" | "cancelado";
}

export function ScheduleCard({
  date,
  locale,
  status = "analise",
}: ScheduleCardProps) {
  const scheduledDay = new Date(Number(date));

  const formattedDate: DateProps = {
    day: format(scheduledDay, "d", { locale: ptBR }),
    dayWeek: format(scheduledDay, "E", { locale: ptBR }),
    mother: format(scheduledDay, "MMMM", { locale: ptBR }),
  };

  return (
    <Container>
      <Body>
        <DateContainer>
          <DayWeek>{formattedDate.dayWeek}</DayWeek>
          <Day>{formattedDate.day}</Day>
          <Mother>{formattedDate.mother}</Mother>
        </DateContainer>
        <LeftContainer>
          <MoreButton>
            <Feather name="more-horizontal" size={48} />
          </MoreButton>
          <LocaleContainer>
            <Feather name="map-pin" size={29} />
            <Locale>{locale}</Locale>
          </LocaleContainer>
        </LeftContainer>
      </Body>
      <Footer status={status}>
        <Status>{status}</Status>
      </Footer>
    </Container>
  );
}

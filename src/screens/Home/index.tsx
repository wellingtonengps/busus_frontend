import React from "react";
import { FlatList } from "react-native";
import { ScheduleCard, IconButton } from "../../components";
import { useAuth } from "../../hooks/auth";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  UserInfo,
  UserGreeting,
  User,
  UserName,
  WrapperHeader,
  Image,
} from "./styles";

interface ScheduleCardProps {
  id: string;
  date: string;
  locale: string;
  status: "confirmado" | "analise" | "cancelado";
}

const teste: Array<ScheduleCardProps> = [
  {
    id: "1",
    date: new Date().getTime().toString(),
    locale: "Teófilo Otoni",
    status: "confirmado",
  },
  {
    id: "2",
    date: new Date().getTime().toString(),
    locale: "Teófilo Otoni",
    status: "cancelado",
  },
  {
    id: "3",
    date: new Date().getTime().toString(),
    locale: "Teófilo Otoni",
    status: "analise",
  },
  {
    id: "4",
    date: new Date().getTime().toString(),
    locale: "Teófilo Otoni",
    status: "confirmado",
  },
];

export function Home() {
  const { user, handleSignOut } = useAuth();

  return (
    <Container>
      <WrapperHeader>
        <UserInfo>
          <Image source={{ uri: user?.photoURL }} />
          <User>
            <UserGreeting>Olá</UserGreeting>
            <UserName>{user?.displayName}</UserName>
          </User>
        </UserInfo>
        <IconButton onPress={handleSignOut}>
          <Ionicons name="exit-outline" size={24} color="black" />
        </IconButton>
      </WrapperHeader>
      <FlatList
        data={teste}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ScheduleCard
            date={item.date}
            locale={item.locale}
            status={item.status}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

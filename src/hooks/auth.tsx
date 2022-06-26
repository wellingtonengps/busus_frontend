import React, { createContext, useContext, useState, ReactNode } from "react";
import Constants from "expo-constants";

//const inProduction = manifest.packagerOpts == null;
const inProduction = process.env.NODE_ENV === "production";
const inExpo = Constants.manifest && Constants.manifest.debuggerHost;
const inBrowser = typeof document !== "undefined";

export const apiDomain = inProduction
  ? "mywebsite.com"
  : inExpo
    ? Constants.manifest!.debuggerHost!.split(`:`).shift()
    : inBrowser
      ? document.location.hostname
      : "unknown";

console.log("apiDomain:", apiDomain);

const protocol = inProduction ? "https" : "http";

const apiUrl = `${protocol}://${apiDomain}/user`;

console.log(apiUrl);

interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  phoneNumber: number;
  name: string;
  CPF: number;
  password: string;
  susNumber: number;
  photoURI: string;
}

interface IAuthContextData {
  user: User | null;
  setUser(user: User | null): void;
  handleCreateUserAccount(user: User): void;
  //passar o CPF no formato number para o banco de dados
  handleSignIn(CPF: string, password: string): void;
  handleSignOut(): void;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function handleCreateUserAccount(user: User) {
    const response = await fetch(`http://192.168.15.6:3000/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        CPF: user.CPF,
        sus_code: user.susNumber,
        password: user.password,
        phone_number: user.phoneNumber,
        profile_image: user.photoURI,
      }),
    });
    const content = await response.json();
    console.log(content);
  }

  function handleSignIn() { }

  function handleSignOut() { }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleCreateUserAccount,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

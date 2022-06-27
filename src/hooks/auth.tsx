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
    const formData = new FormData();

    try {


      formData.append("image", { uri: user.photoURI, type: 'image/png', name: 'image.png' });
      formData.append("name", "Wellington Pereira");
      formData.append("CPF", "14237106659");
      formData.append("sus_code", "123456789");
      formData.append("password", "wel1ing7")
      formData.append("phone_number", "33999938459");

      console.log(formData);



      const response = await fetch(`http://192.168.15.6:3000/user`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData
      });
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
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

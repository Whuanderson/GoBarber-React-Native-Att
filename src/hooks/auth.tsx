import React, { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface authState {
  token: string;
  user: User
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentrials: SignInCredentials) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<authState>({} as authState)

  async function signIn({email, password}: SignInCredentials) {
    const response = await api.post ('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    
    api.defaults.headers.authorization = `Bearer ${token}`,

    setData({ token, user});
  } 

  return (
    <AuthContext.Provider value={{
      user: data.user,
      signIn
     }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth }
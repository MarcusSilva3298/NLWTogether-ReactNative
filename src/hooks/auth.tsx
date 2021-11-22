import React, { createContext, ReactNode, useContext, useState } from 'react'

interface User {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

interface AuthContextData {
  user: User
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({
    id: '1',
    username: 'teste',
    firstName: 'teste',
    avatar: 'teste',
    email: 'teste',
    token: 'teste'
  })

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }

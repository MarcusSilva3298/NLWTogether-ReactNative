import React, { createContext, ReactNode, useContext, useState } from 'react'

import * as AuthSession from 'expo-auth-session'
import { api } from '../services/api'
import {
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE
} from '../configs/discordAuth'

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
  loading: boolean
  singIn: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

type AuthResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const [loading, setLoading] = useState(false)

  async function singIn() {
    try {
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl
      })) as AuthResponse

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token
        })

        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (errs) {
      throw new Error(`SignIn Error: ${errs}`)
    }
  }

  return (
    <AuthContext.Provider value={{ user, singIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }

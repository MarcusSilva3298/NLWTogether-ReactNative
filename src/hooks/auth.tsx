import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api'
import { COLLECTION_USERS } from '../configs/database'

const { CDN_IMAGE } = process.env
const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env
const { SCOPE } = process.env

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
    access_token?: string
    error?: string
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

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me')

        const firstName = userInfo.data.username.split(' ')[0]
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))

        setUser(userData)
      }
    } catch (errs) {
      throw new Error(`SignIn Error: ${errs}`)
    } finally {
      setLoading(false)
    }
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS)

    if (storage) {
      const userLogged = JSON.parse(storage) as User
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`

      setUser(userLogged)
    }
  }

  useEffect(() => {
    loadUserStorageData()
  })

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

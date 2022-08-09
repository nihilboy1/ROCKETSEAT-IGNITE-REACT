import { useRouter } from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

type User = {
  email: string
  permissions: string[]
  roles: string[]
}
interface SignInCredentials {
  email: string
  password: string
}
interface AuthContextData {
  // aqui ta retornando uma promise pq a função é assíncrona
  signIn(credentials: SignInCredentials): Promise<void>
  user: User
  isAuthenticated: boolean
}
interface AuthProviderProps {
  children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)

// ----------------------------------------------------------------

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', { email, password })
      const { token, refreshtoken, permissions, roles } = response.data
      setUser({
        email,
        permissions,
        roles
      })
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}

import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
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

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/me').then(res => {
        const { email, permissions, roles } = res.data

        setUser({
          email,
          permissions,
          roles
        })
      })
    }
  }, [])
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', { email, password })
      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
      setUser({
        email,
        permissions,
        roles
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`
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

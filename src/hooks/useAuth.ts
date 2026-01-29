import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'

export function useAuth() {
  const { isLoggedIn, login, logout } = useContext(AuthContext)
  return { isLoggedIn, login, logout }
}

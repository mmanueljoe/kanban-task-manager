export interface Board {
  id: number
  name: string
  description: string
}

export interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

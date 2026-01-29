import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}

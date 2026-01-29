import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    // Set initial theme on HTML element immediately
    const initialTheme = 'light'
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', initialTheme)
    }
    return initialTheme
  })

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', newTheme)
      return newTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

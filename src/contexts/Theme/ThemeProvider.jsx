import { createContext, useState, useContext } from "react"
import { themes } from "../../styles/theme"

const ThemeContext = createContext()

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeContext deve ser usado dentro de um Objeto Provider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const value = [theme, setTheme]

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

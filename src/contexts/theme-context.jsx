import { createContext, useState, useContext } from "react"

const ThemeContext = createContext()

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeContext deve ser usado dentro de um Objeto Provider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [fullList, setFullList] = useState([])

  const value = {
    fullList,
    setFullList,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

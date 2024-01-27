import { createContext, useState, useContext, useEffect } from "react"
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
  const themeStorage = JSON.parse(localStorage.getItem("theme"))
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")
  const homeTheme =
    themeStorage && typeof themeStorage === "string"
      ? themes[themeStorage]
      : getDefaultTheme()

  const [theme, setTheme] = useState(homeTheme)

  function getDefaultTheme() {
    if (!window.matchMedia) return themes.light

    const defaultTheme = darkTheme.matches ? themes.dark : themes.light
    return defaultTheme
  }

  const handleChangeTheme = (event) => {
    const newTheme = event.matches ? themes.dark : themes.light
    setTheme(newTheme)
    localStorage.setItem("theme", JSON.stringify(newTheme.theme))
  }

  useEffect(() => {
    if (window.matchMedia) {
      darkTheme.addListener((event) => handleChangeTheme(event))
    }

    return () => darkTheme.removeListener(handleChangeTheme)
  }, [])

  const value = [theme, setTheme]

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

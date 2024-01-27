import { StyleButtonToggle } from "./styled"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"
import { themes } from "../../styles/theme.js"
import { MoonIcon, SunIcon } from "../icons/"

export const ButtonToggleTheme = () => {
  const [theme, setTheme] = useThemeContext()

  const handleClick = () => {
    const newTheme = theme.theme === "light" ? themes.dark : themes.light

    localStorage.setItem("theme", JSON.stringify(newTheme.theme))
    setTheme(newTheme)
  }
  return (
    <StyleButtonToggle onClick={handleClick} $theme={theme}>
      <SunIcon size="1rem" />
      <MoonIcon size="1rem" />
      <div></div>
    </StyleButtonToggle>
  )
}

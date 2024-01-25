import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"
import { ButtonStyle } from "./styled"

export const ButtonDefault = (props) => {
  const [theme] = useThemeContext()

  return (
    <ButtonStyle $theme={theme} {...props}>
      {props.value}
    </ButtonStyle>
  )
}

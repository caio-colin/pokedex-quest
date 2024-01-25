import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"
import { StyleBorderProgressBar, StyleProgresBar } from "./styled"

export const ProgressBar = ({ width, height, value, maxvalue }) => {
  const [theme] = useThemeContext()

  return (
    <StyleBorderProgressBar $theme={theme} width={width} height={height}>
      <StyleProgresBar $value={value} $maxvalue={maxvalue}>
        <div></div>
      </StyleProgresBar>
    </StyleBorderProgressBar>
  )
}

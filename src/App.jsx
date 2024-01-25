import { AppRouter } from "./routes/Routes"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useThemeContext } from "./contexts/Theme/ThemeProvider.jsx"

function App() {
  const [theme] = useThemeContext()

  return (
    <>
      <AppRouter />
      <GlobalStyle $theme={theme} />
    </>
  )
}

export default App

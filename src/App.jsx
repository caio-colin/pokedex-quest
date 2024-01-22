import { ThemeProvider } from "./contexts/ThemeContext"
import { AppRouter } from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

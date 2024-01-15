import { PokemonsProvider } from "./contexts/PokemonsContext"
import { AppRouter } from "./pages/Routers"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <PokemonsProvider>
        <AppRouter />
      </PokemonsProvider>
    </BrowserRouter>
  )
}

export default App

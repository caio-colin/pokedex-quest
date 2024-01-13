import { PokemonsProvider } from "./contexts/PokemonsContext"
import { AppRouter } from "./pages/Routers"

function App() {
  return (
    <>
      {/* <PokemonsProvider> */}
        <AppRouter />
      {/* </PokemonsProvider> */}
    </>
  )
}

export default App

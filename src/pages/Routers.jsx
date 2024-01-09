import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { PokemonDetails } from "./PokemonDetails"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:nameOrId" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

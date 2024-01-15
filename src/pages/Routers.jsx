import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { PokemonDetails } from "./PokemonDetails"
import { NotFound } from "./Errors/NotFound"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:nameOrId" element={<PokemonDetails />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}

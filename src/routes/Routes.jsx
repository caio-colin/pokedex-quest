import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { PokemonDetails } from "../pages/PokemonDetails"
import { NotFound } from "../pages/Errors/NotFound"
import { ScrolToTop } from "./ScrolToTop"

export const AppRouter = () => {
  return (
    <>
      <ScrolToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:nameOrId" element={<PokemonDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  )
}

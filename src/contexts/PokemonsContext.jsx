import { createContext, useState, useContext } from "react"

const PokemonsContext = createContext()

export const usePokemonContext = () => {
  const context = useContext(PokemonsContext)
  if (!context) {
    throw new Error("usePokemonContext deve ser usado dentro de um Objeto Provider")
  }
  return context
}

export const PokemonsProvider = ({ children }) => {
  const [fullList, setFullList] = useState([])

  const value = {
    fullList,
    setFullList,
  }

  return <PokemonsContext.Provider value={value}>{children}</PokemonsContext.Provider>
}

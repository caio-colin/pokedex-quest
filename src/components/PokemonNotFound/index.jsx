import { StylePokemonNotFound } from "./styled"
import { pokemonNotFoundImg } from "../../imgs"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const PokemonNotFound = () => {
  const [theme] = useThemeContext()

  return (
    <StylePokemonNotFound $theme={theme}>
      <img src={pokemonNotFoundImg} alt="pokemon not found" />
      <h3>pokemon not found</h3>
    </StylePokemonNotFound>
  )
}

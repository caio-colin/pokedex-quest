import { StylePokemonNotFound } from "./styled"
import { pokemonNotFoundImg } from "../../imgs"

export const PokemonNotFound = () => {
  return (
    <StylePokemonNotFound>
      <img src={pokemonNotFoundImg} alt="pokemon not found" />
      <h3>pokemon not found</h3>
    </StylePokemonNotFound>
  )
}

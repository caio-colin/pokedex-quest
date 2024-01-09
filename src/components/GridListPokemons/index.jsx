import { ContainerStyle, LiStyle } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonNotFound } from "../PokemonNotFound"
import { Link } from "react-router-dom"
import { SkeletonCardPokemon } from "../SkeletonCardPokemon"

export const GridListPokemons = ({ children, loading, pokemonsList }) => {
  return (
    <ContainerStyle>
      {children ? (
        children
      ) : pokemonsList.length == 0 ? (
        <LiStyle>
          <PokemonNotFound />
        </LiStyle>
      ) : (
        <>
          {pokemonsList.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
              <CardPokemon
                key={pokemon.id}
                id={pokemon.id}
                sprites={pokemon.sprites}
                name={pokemon.name}
                types={pokemon.types}
              />
            </Link>
          ))}
          {loading && <SkeletonCardPokemon start={10} />}
        </>
      )}
    </ContainerStyle>
  )
}

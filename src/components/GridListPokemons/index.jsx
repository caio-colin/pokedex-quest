import { useEffect, useRef } from "react"
import { ContainerStyle, LiStyle } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonNotFound } from "../PokemonNotFound"
import { Link } from "react-router-dom"
import { SkeletonCardPokemon } from "../SkeletonCardPokemon"

export const GridListPokemons = ({ children, loading, pokemonsList }) => {
  const pokemonClick = useRef(null)
  const itemIndex = parseInt(sessionStorage.getItem("pokemonSelected"))

  useEffect(() => {
    setTimeout(() => {
      if (itemIndex && pokemonClick.current) {
        pokemonClick.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
        // Ao remover pokemonSelected do Storage garante que o Card perca a seleção ao relogar a pagina
        sessionStorage.removeItem("pokemonSelected")
      }
    }, 500)
  }, [])

  const handleClick = (indexCard) => {
    // Guardar o nome do pokemon selecionado na sessionStorage
    sessionStorage.setItem("pokemonSelected", indexCard)
  }
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
          {pokemonsList.map((pokemon, index) => (
            <Link
              to={`/pokemon/${pokemon.name}`}
              key={pokemon.id}
              onClick={() => handleClick(index)}
              ref={index == itemIndex ? pokemonClick : null}
              className={index == itemIndex ? "item-selected" : null}
            >
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

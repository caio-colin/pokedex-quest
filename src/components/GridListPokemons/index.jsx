import { useEffect, useRef } from "react"
import { ContainerStyle, LiStyle } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonNotFound } from "../PokemonNotFound"
import { Link } from "react-router-dom"
import { SkeletonCardPokemon } from "../SkeletonCardPokemon"

export const GridListPokemons = ({ children, loading, pokemonsList }) => {
  const pokemonClick = useRef(null)
  const pokemonNameSelected = JSON.parse(sessionStorage.getItem("pokemonSelected"))

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (pokemonNameSelected && pokemonClick.current) {
        // pokemonClick.current.scrollIntoView({
        //   behavior: "smooth",
        //   block: "center",
        // })
        // Ao remover pokemonSelected do Storage garante que o Card perca a seleção ao relogar a pagina
        sessionStorage.removeItem("pokemonSelected")
      }
    }, 200)

    return () => {
      console.log("desmontou")
      clearTimeout(timeoutId)
    }
  }, [loading])

  const handleClick = (pokemonName) => {
    // Guardar o nome do pokemon selecionado na sessionStorage
    sessionStorage.setItem("pokemonSelected", JSON.stringify(pokemonName))
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
          {pokemonsList.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.name}`}
              key={pokemon.id}
              onClick={() => handleClick(pokemon.name)}
              ref={pokemon.name == pokemonNameSelected ? pokemonClick : null}
              className={pokemon.name == pokemonNameSelected ? "item-selected" : null}
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

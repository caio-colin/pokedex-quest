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
    const options = {
      root: null, //Toda a viewport sera observada
      rootMargin: "0px", // Distância da viewport em relação ao elemento
      threshold: 0.1, // Quanto o elemento precisa esta visivel para ser observado
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleIntersection()
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    // const timeoutId = setTimeout(() => {
      if (pokemonNameSelected && pokemonClick.current) {
        observer.observe(pokemonClick.current)
        // Scroll para o pokemon selecionado
        pokemonClick.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
        // Ao remover pokemonSelected do Storage garante que o Card perca a seleção ao relogar a pagina
        sessionStorage.removeItem("pokemonSelected")
      }
    // }, 50)

    return () => {
      // clearTimeout(timeoutId)
    }
  }, [loading])

  const handleIntersection = () => {
    pokemonClick.current?.classList.add("item-selected")
  }

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
              // className={pokemon.name == pokemonNameSelected ? "item-selected" : null}
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

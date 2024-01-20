import { useEffect, useRef } from "react"
import { ContainerStyle } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonNotFound } from "../PokemonNotFound"
import { Link } from "react-router-dom"
import { SkeletonCardPokemon } from "../SkeletonCardPokemon"
import "./transition.css"
import { TransitionGroup, CSSTransition } from "react-transition-group"

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

    return () => {
      if (pokemonClick.current) {
        observer.unobserve(pokemonClick.current)
      }
    }
  }, [loading, pokemonsList])

  const handleIntersection = () => {
    pokemonClick.current?.classList.add("item-selected")
  }

  const handleClick = (pokemonName) => {
    // Guardar o nome do pokemon selecionado na sessionStorage
    sessionStorage.setItem("pokemonSelected", JSON.stringify(pokemonName))

    // Recupera o valor do contador quando o pokemon for selecionado
    const countHome = parseInt(sessionStorage.getItem("countHome"))
    sessionStorage.setItem("countSession", countHome)
  }
  return (
    <ContainerStyle>
      {children ? (
        children
      ) : pokemonsList.length == 0 ? (
        <PokemonNotFound />
      ) : (
        <>
          <TransitionGroup component={null}>
            {pokemonsList.map((pokemon) => (
              <CSSTransition key={pokemon.id} timeout={500} classNames="fade">
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  onClick={() => handleClick(pokemon.name)}
                  ref={pokemon.name == pokemonNameSelected ? pokemonClick : null}
                >
                  <CardPokemon
                    key={pokemon.id}
                    id={pokemon.id}
                    sprites={pokemon.sprites}
                    name={pokemon.name}
                    types={pokemon.types}
                  />
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {loading && <SkeletonCardPokemon start={10} />}
        </>
      )}
    </ContainerStyle>
  )
}

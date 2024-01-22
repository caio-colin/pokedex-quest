import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./transition.css"
import { ContainerStyle } from "./style"
import { CardPokemon } from "../CardPokemon"
import { PokemonNotFound } from "../PokemonNotFound"
import { Link } from "react-router-dom"
import { SkeletonCardPokemon } from "../SkeletonCardPokemon"

export const GridListPokemons = ({ children, loading, pokemonsList }) => {
  const pokemonClick = useRef(null)
  const pokemonNameSelected = JSON.parse(sessionStorage.getItem("pokemonSelected"))
  const [refView, inView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (pokemonNameSelected && pokemonClick.current) {
      // Scroll para o pokemon selecionado
      pokemonClick.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [loading, pokemonsList])

  const handleIntersection = () => {
    sessionStorage.removeItem("pokemonSelected")
    return "item-selected"
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
                  ref={pokemon.name === pokemonNameSelected ? pokemonClick : null}
                  className={
                    pokemon.name === pokemonNameSelected && inView
                      ? handleIntersection()
                      : null
                  }
                >
                  <CardPokemon
                    ref={pokemon.name === pokemonNameSelected ? refView : null}
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

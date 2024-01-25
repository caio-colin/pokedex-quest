import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { HeaderStyle, MainStyle, FooterStyle, StyleHomePage } from "./styled.jsx"
import { ButtonDefault, PokemonDetail, InputMultipleOptions, ButtonToggleTheme } from "../../components/"
import { HouseIcon } from "../../components/icons"
import { getPokemons, getDecriptionsAbilities } from "../../services/requestAPI.js"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const PokemonDetails = () => {
  const { nameOrId } = useParams()
  const [pokemonToShow, setPokemonToShow] = useState(null)
  const [pokemonSelected, setPokemonSelected] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [theme] = useThemeContext()

  useEffect(() => {
    const getPokemon = async (nameId) => {
      setLoading(true)
      const pokemon = await getPokemons(nameId)

      try {
        const pokemonWithDescription = await getDecriptionsAbilities(pokemon[0])

        setPokemonToShow(pokemonWithDescription)
        setLoading(false)
        navigate("../pokemon/" + nameId)
      } catch (error) {
        console.error("Erro ao tentar pegar descrição:", error)

        navigate("../404")
      }
    }

    pokemonSelected != "" ? getPokemon(pokemonSelected) : getPokemon(nameOrId)
  }, [pokemonSelected])

  return (
    <>
      <MainStyle $theme={theme}>
        <HeaderStyle>
          <Link to={!loading ? "/" : null}>
            <StyleHomePage $theme={theme}>
              <HouseIcon size={16} />
              <span>To go back</span>
            </StyleHomePage>
          </Link>
          <InputMultipleOptions setPokemonSelected={setPokemonSelected} />
          <ButtonToggleTheme/>
        </HeaderStyle>
        <PokemonDetail loading={loading} pokemonShow={pokemonToShow} />
        <ButtonDefault value="previous pokemon" disabled onClick={function () {}} />
        <ButtonDefault value="next pokemon" disabled onClick={function () {}} />
      </MainStyle>
      <FooterStyle $theme={theme}>
        Pokédex &copy; 2023 - {new Date().getFullYear()}
      </FooterStyle>
    </>
  )
}

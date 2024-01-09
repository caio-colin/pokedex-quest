import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { HeaderStyle, MainStyle, FooterStyle } from "../Home/styled.jsx"
import { ButtonDefault } from "../../components/ButtonDefault/"
import { getPokemons, getDecriptionsAbilities } from "../../services/requestAPI.js"
import { InputMultipleOptions } from "../../components/InputMultipleOptions/"
import { PokemonDetail } from "../../components/PokemonDetail/"

export const PokemonDetails = () => {
  const { nameOrId } = useParams()
  const [pokemonToShow, setPokemonToShow] = useState(null)
  const [pokemonSelected, setPokemonSelected] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getPokemon = async (nameId) => {
      setLoading(true)
      const pokemon = await getPokemons(nameId)
      const pokemonWithDescription = await getDecriptionsAbilities(pokemon[0])
      setLoading(false)
      setPokemonToShow(pokemonWithDescription)
      navigate("../pokemon/" + nameId)
    }
    
    pokemonSelected != "" ? getPokemon(pokemonSelected) : getPokemon(nameOrId)
  }, [pokemonSelected])

  return (
    <>
      <MainStyle>
        <HeaderStyle>
          <Link to="/">{"<"} Home page</Link>
          <InputMultipleOptions setPokemonSelected={setPokemonSelected} />
        </HeaderStyle>
        <PokemonDetail loading={loading} pokemonShow={pokemonToShow} />
        <ButtonDefault value="previous pokemon" disabled onClick={function () {}} />
        <ButtonDefault value="next pokemon" disabled onClick={function () {}} />
      </MainStyle>
      <FooterStyle>Pokédex &copy; 2023 - {new Date().getFullYear()}</FooterStyle>
    </>
  )
}

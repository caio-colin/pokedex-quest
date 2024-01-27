import { useEffect, useState } from "react"
import { ButtonDefault } from "../"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider"
import { StyleNaviagatePokemon } from "./styled"
import { getListPokemonsNames } from "../../services/requestAPI"
import { useParams } from "react-router-dom"
import { IconArrow } from "../icons"

export const NavigatePokemon = ({ setPokemonSelected }) => {
  const listNamePokemonSession = JSON.parse(sessionStorage.getItem("listNamePokemon"))
  const [theme] = useThemeContext()
  const [listName, setListName] = useState([])
  const { nameOrId } = useParams()
  const positionFindIndex = !isNaN(nameOrId)
    ? listName.findIndex((pokemon) => pokemon.id === nameOrId)
    : listName.findIndex((pokemon) => pokemon.name === nameOrId)

  useEffect(() => {
    ;(async () => {
      const list = listNamePokemonSession
        ? listNamePokemonSession
        : await getListPokemonsNames()

      setListName(list)
    })()
  }, [])

  const formatPokemon = (pokemon) =>
    `#${String(pokemon.id).padStart(3, "0")} ${pokemon.name}`

  return (
    <StyleNaviagatePokemon $theme={theme}>
      <ButtonDefault
        disabled={positionFindIndex <= 0}
        value={
          positionFindIndex > 0 ? (
            <>
              <IconArrow size="1rem" rotate={180} />{" "}
              {formatPokemon(listName[positionFindIndex - 1])}
            </>
          ) : (
            "First Pokemon"
          )
        }
        onClick={() => setPokemonSelected(listName[positionFindIndex - 1].name)}
      />
      <ButtonDefault
        disabled={positionFindIndex === -1 || positionFindIndex === listName.length - 1}
        value={
          positionFindIndex !== -1 && positionFindIndex < listName.length - 1 ? (
            <>
              {formatPokemon(listName[positionFindIndex + 1])}
              <IconArrow size="1rem" />
            </>
          ) : (
            "Last Pokemon"
          )
        }
        onClick={() => setPokemonSelected(listName[positionFindIndex + 1].name)}
      />
    </StyleNaviagatePokemon>
  )
}

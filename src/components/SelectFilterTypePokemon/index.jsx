import { getTypes } from "../../services/requestAPI"
import { SelectFilter } from "../SelectFilter"
import { useState, useEffect } from "react"

export const SelectFilterTypePokemon = ({ setListPokemonsByType }) => {
  const typeSession = JSON.parse(sessionStorage.getItem("typeSelectedOnPage"))
  const [typesPokemon, setTypesPokemon] = useState([])
  const [typeSelectedOnPage, setTypeSelectedOnPage] = useState("")
  // Esse estado altera o estado do SelectFilter
  const [valueByFather, setValueByFather] = useState("")

  const typeSelected = (strSelected, list) => {
    if (strSelected === "") {
      return []
    }

    const ObjectTypeSelected = list.find((type) => type.name == strSelected.toString())
    const pokemonsByType = ObjectTypeSelected.pokemon.map((item) => item.pokemon)

    return pokemonsByType
  }

  useEffect(() => {
    const addTypes = async () => {
      const types = await getTypes()
      setTypesPokemon(types)

      if (typeSession) {
        setValueByFather(typeSession)
      }
    }

    const listType = typeSelected(typeSelectedOnPage, typesPokemon)

    typesPokemon.length > 0 ? setListPokemonsByType(listType) : addTypes()
  }, [typeSelectedOnPage])

  return (
    <SelectFilter
      valueByFather={valueByFather}
      value="select type"
      list={typesPokemon.map((type) => type.name)}
      setOptionSelectedOnPage={setTypeSelectedOnPage}
    />
  )
}

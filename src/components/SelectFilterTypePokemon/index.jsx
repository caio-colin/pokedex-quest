import { getTypes } from "../../services/requestAPI"
import { SelectFilter } from "../SelectFilter"
import { useState, useEffect } from "react"

export const SelectFilterTypePokemon = ({ setListPokemonsByType }) => {
  const [typesPokemon, setTypesPokemon] = useState([])
  const [typeSelectedOnPage, setTypeSelectedOnPage] = useState("")

  useEffect(() => {
    const addTypes = async () => {
      const types = await getTypes()
      setTypesPokemon(types)
    }

    const typeSelected =
      typesPokemon.length > 0 && typeSelectedOnPage !== ""
        ? typesPokemon
            .find((type) => type.name == typeSelectedOnPage.toString())
            .pokemon.map((item) => item.pokemon)
        : []

    typesPokemon.length > 0 ? setListPokemonsByType(typeSelected) : addTypes()
  }, [typeSelectedOnPage])

  return (
    <SelectFilter
      value="select type"
      list={typesPokemon.map((type) => type.name)}
      setOptionSelectedOnPage={setTypeSelectedOnPage}
    />
  )
}

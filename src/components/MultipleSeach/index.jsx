import { useState, useEffect } from "react"
import { InputSearch } from "../InputSearch"
import { useConditionFiltering } from "../../Hoocks"
import { getPokemons } from "../../services/requestAPI"
import { SelectFilterTypePokemon } from "../SelectFilterTypePokemon"

export const MultipleSeach = ({
  listNames = [],
  setListSearchFilter = function () {},
  setFiltering = function () {},
}) => {
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listPokemonsByType, setListPokemonsByType] = useState([])

  const resultFiltering = useConditionFiltering(
    nameSelectedOnPage,
    listPokemonsByType,
    listNames
  )

  useEffect(() => {
    const setListSeach = async (list) => {
      setFiltering(true)
      const filteredResult = await getPokemons(list)
      setFiltering(false)
      setListSearchFilter(filteredResult)
    }

    nameSelectedOnPage !== "" || listPokemonsByType.length > 0
      ? setListSeach(resultFiltering)
      : setListSearchFilter(null)
  }, [nameSelectedOnPage, listPokemonsByType])

  return (
    <>
      <InputSearch setNameSelectedOnPage={setNameSelectedOnPage} />
      <SelectFilterTypePokemon setListPokemonsByType={setListPokemonsByType} />
    </>
  )
}

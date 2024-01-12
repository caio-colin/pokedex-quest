import { useState, useEffect, useRef } from "react"
import { InputSearch } from "../InputSearch"
import { useConditionFiltering } from "../../Hoocks/index.jsx"
import { getPokemons } from "../../services/requestAPI"
import { SelectFilterTypePokemon } from "../SelectFilterTypePokemon"

export const MultipleSeach = ({
  listNames = [],
  setListSearchFilter = function () {},
  setFiltering = function () {},
}) => {
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listPokemonsByType, setListPokemonsByType] = useState([])
  const timeOutId = useRef(null)
  const resultFiltering = useConditionFiltering(
    nameSelectedOnPage,
    listPokemonsByType,
    listNames
  )

  const setListSeach = async (list) => {
    setFiltering(true)
    const filteredResult = await getPokemons(list)
    setFiltering(false)
    setListSearchFilter(filteredResult)
  }

  useEffect(() => {
    clearTimeout(timeOutId.current)

    timeOutId.current = setTimeout(() => {
      nameSelectedOnPage !== "" || listPokemonsByType.length > 0
        ? setListSeach(resultFiltering)
        : setListSearchFilter(null)
    }, 1000)

    return () => {
      clearTimeout(timeOutId.current)
    }
  }, [nameSelectedOnPage])

  useEffect(() => {
    nameSelectedOnPage !== "" || listPokemonsByType.length > 0
      ? setListSeach(resultFiltering)
      : setListSearchFilter(null)
  }, [listPokemonsByType])

  return (
    <>
      <InputSearch setNameSelectedOnPage={setNameSelectedOnPage} />
      <SelectFilterTypePokemon setListPokemonsByType={setListPokemonsByType} />
    </>
  )
}

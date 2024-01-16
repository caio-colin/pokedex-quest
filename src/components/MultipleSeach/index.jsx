import { useState, useEffect, useRef } from "react"
import { InputSearch } from "../InputSearch"
import { useConditionFiltering } from "../../Hooks/index.jsx"
import { getPokemons } from "../../services/requestAPI"
import { SelectFilterTypePokemon } from "../SelectFilterTypePokemon"

export const MultipleSeach = ({
  listNames = [],
  setListSearchFilter = function () {},
  setFiltering = function () {},
}) => {
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listPokemonsByType, setListPokemonsByType] = useState([])
  const isMounted = useRef(false)
  const timeOutId = useRef(null)
  const [progressTime, setProgressTime] = useState(null)

  const resultFiltering = useConditionFiltering(
    nameSelectedOnPage,
    listPokemonsByType,
    listNames
  )

  const setListSeach = async (list) => {
    setFiltering(true)
    const filteredResult = await getPokemons(list)

    setListSearchFilter(filteredResult)
    setFiltering(false)
  }

  useEffect(() => {
    const savedList = () => {
      sessionStorage.setItem("filterList", JSON.stringify(resultFiltering))
    }

    const removeList = () => {
      if (isMounted.current) {
        sessionStorage.removeItem("filterList")
      }
    }

    resultFiltering.length > 0 ? savedList() : removeList()
  }, [nameSelectedOnPage, listPokemonsByType])

  useEffect(() => {
    clearTimeout(timeOutId.current)

    if (isMounted.current) {
      setFiltering(true)
      timeOutId.current = setTimeout(() => {
        // setFiltering(true) habilita o efeito de skeleton, para simbolizar uma busca
        // setProgressTime, define tempo para o efeito de loading do input, sem o tempo o input não tem efeito
        setProgressTime(500)

        setTimeout(() => {
          nameSelectedOnPage !== ""
            ? setListSeach(resultFiltering)
            : setListSearchFilter(null)
          setFiltering(false)
          setProgressTime(null)
        }, 500)
      }, 1000)
    }

    isMounted.current = true

    return () => {
      clearTimeout(timeOutId.current)
    }
  }, [nameSelectedOnPage])

  useEffect(() => {
    listPokemonsByType.length > 0
      ? setListSeach(resultFiltering)
      : setListSearchFilter(null)
  }, [listPokemonsByType])

  return (
    <>
      <InputSearch
        timeSearch={progressTime}
        setNameSelectedOnPage={setNameSelectedOnPage}
      />
      <SelectFilterTypePokemon setListPokemonsByType={setListPokemonsByType} />
    </>
  )
}

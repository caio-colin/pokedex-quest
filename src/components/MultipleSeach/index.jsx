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
  const nameSession = JSON.parse(sessionStorage.getItem("nameSelectedOnPage"))
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listPokemonsByType, setListPokemonsByType] = useState([])
  const [valueByFather, setValueByFather] = useState("")
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
  const runSearch = () => {
    clearTimeout(timeOutId.current)

    setFiltering(true)
    timeOutId.current = setTimeout(() => {
      // setFiltering(true) habilita o efeito de skeleton, para simbolizar uma busca
      // setProgressTime, define tempo para o efeito de loading do input, se o tempo nao for definido o input não tem efeito
      setProgressTime(500)

      setTimeout(() => {
        const handleFalse = () => {
          setFiltering(false)
          setListSearchFilter(null)
        }

        listPokemonsByType.length > 0 || nameSelectedOnPage !== ""
          ? setListSeach(resultFiltering)
          : handleFalse()

        setProgressTime(null)
      }, 500)
    }, 1000)
  }

  useEffect(() => {
    if (nameSession) {
      setValueByFather(nameSession)
    }
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      runSearch()
    }

    isMounted.current = true

    return () => {
      clearTimeout(timeOutId.current)
    }
  }, [nameSelectedOnPage, listPokemonsByType])

  return (
    <>
      <InputSearch
        valueByFather={valueByFather}
        timeSearch={progressTime}
        setNameSelectedOnPage={setNameSelectedOnPage}
      />
      <SelectFilterTypePokemon setListPokemonsByType={setListPokemonsByType} />
    </>
  )
}

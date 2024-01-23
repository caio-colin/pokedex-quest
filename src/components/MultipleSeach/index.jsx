import { useState, useEffect, useRef } from "react"
import { InputSearch } from "../InputSearch"
import { useConditionFiltering } from "../../Hooks/index.jsx"
import { getPokemons } from "../../services/requestAPI"
import { SelectFilterTypePokemon } from "../SelectFilterTypePokemon"
import { StyleContainerMultipleSearch } from "./styled.jsx"

export const MultipleSeach = ({
  listNames = [],
  setListSearchFilter = function () {},
  setFiltering = function () {},
}) => {
  const nameSession = JSON.parse(sessionStorage.getItem("nameSelectedOnPage"))
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listPokemonsByType, setListPokemonsByType] = useState([])
  const [widthParent, setWidthParent] = useState(null)
  const [valueByFather, setValueByFather] = useState("")
  const [isElementAboveViewport, setIsElementAboveViewport] = useState(false)
  const isMounted = useRef(false)
  const elementObserved = useRef(null)
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
    window.scrollTo(0, 0)
    setFiltering(false)
  }
  const removeFocus = () => {
    if (document.activeElement) {
      document.activeElement.blur()
    }
  }
  const runSearch = () => {
    clearTimeout(timeOutId.current)

    setFiltering(true)
    timeOutId.current = setTimeout(() => {
      // setFiltering(true) habilita o efeito de skeleton, para simbolizar uma busca
      // setProgressTime, define tempo para o efeito de loading do input, se o tempo nao for definido o input não tem efeito
      setProgressTime(500)
      removeFocus()
      setTimeout(() => {
        const handleFalse = () => {
          window.scrollTo(0, 0)
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
    const handleScroll = () => {
      if (elementObserved.current) {
        const rect = elementObserved.current.getBoundingClientRect()
        const isAboveViewport = rect.bottom < 0
        setIsElementAboveViewport(isAboveViewport)
      }
    }

    const handleResize = () => {
      if (elementObserved.current) {
        const widthParentElement = elementObserved.current.parentElement.offsetWidth
        setWidthParent(widthParentElement)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      <StyleContainerMultipleSearch
        $widthParent={widthParent}
        $isElementAboveViewport={isElementAboveViewport}
      >
        <div>
          <InputSearch
            valueByFather={valueByFather}
            timeSearch={progressTime}
            setNameSelectedOnPage={setNameSelectedOnPage}
          />
          <SelectFilterTypePokemon setListPokemonsByType={setListPokemonsByType} />
        </div>
      </StyleContainerMultipleSearch>
      <span ref={elementObserved}></span>
    </>
  )
}

import { useState, useEffect, useRef } from "react"
import { HeaderStyle, MainStyle, FooterStyle } from "./styled"
import { getPokemons, getListPokemonsNames } from "../../services/requestAPI.js"
import {
  ButtonDefault,
  ButtonToggleTheme,
  SkeletonCardPokemon,
  GridListPokemons,
  MultipleSeach,
  GoToTop,
} from "../../components/"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const Home = () => {
  const countSession = sessionStorage.getItem("countSession")
    ? parseInt(sessionStorage.getItem("countSession"))
    : null
  const namePokemonSession = JSON.parse(sessionStorage.getItem("nameSelectedOnPage"))
  const typePokemonSession = JSON.parse(sessionStorage.getItem("typeSelectedOnPage"))
  const [count, setCount] = useState(countSession || 10)
  const [loading, setLoading] = useState(true)
  const [filtering, setFiltering] = useState(false)
  const [listName, setListName] = useState([])
  const [listToShow, setListToShow] = useState([])
  const [theme] = useThemeContext()
  const [listSearchFilter, setListSearchFilter] = useState(null)
  const prevCountRef = useRef(count)
  const isDisable =
    listName.length == 0 ||
    listToShow.length == 0 ||
    listSearchFilter ||
    filtering ||
    loading

  const startApp = async () => {
    const list = await getAndSetList()
    addPokemons(list)
    setLoading(false)
  }

  const getAndSetList = async () => {
    const list = await getListPokemonsNames()
    setListName(list)
    setLoading(false)
    return list
  }
  const addPokemons = async (list) => {
    setLoading(true)
    const listSlieced = list.slice(count - 10, count)
    const newList = await getPokemons(listSlieced)
    setListToShow((prevList) => [...prevList, ...newList])
    setLoading(false)
  }

  const removePokemons = () => {
    setListToShow((prevList) => prevList.slice(0, count))
  }

  const handleCountSession = async (countSession) => {
    const list = await getAndSetList()
    const listSlieced = list.slice(0, countSession)
    const newList = await getPokemons(listSlieced)
    setListToShow(newList)
  }

  useEffect(() => {
    sessionStorage.setItem("countHome", count)

    if (prevCountRef.current > count) {
      removePokemons()
    } else if (listName.length > 0) {
      addPokemons(listName)
    }

    prevCountRef.current = count
  }, [count])

  useEffect(() => {
    const hasSearchList = namePokemonSession?.length > 0 || typePokemonSession?.length > 0

    if (hasSearchList) {
      handleCountSession(countSession || 10)
      return
    } else if (countSession && !hasSearchList) {
      handleCountSession(countSession)
    } else {
      startApp()
    }
  }, [])

  return (
    <>
      <MainStyle $theme={theme}>
        <HeaderStyle>
          {listName.length > 0 ? (
            <MultipleSeach
              listNames={listName}
              setFiltering={setFiltering}
              setListSearchFilter={setListSearchFilter}
            />
          ) : (
            <MultipleSeach key={2} />
          )}
          <GoToTop />
          <ButtonToggleTheme />
        </HeaderStyle>
        {listSearchFilter?.length > 0 || listToShow.length > 0 ? (
          filtering ? (
            <GridListPokemons>
              <SkeletonCardPokemon start={10} />
            </GridListPokemons>
          ) : (
            <GridListPokemons
              loading={loading}
              pokemonsList={listSearchFilter || listToShow}
            />
          )
        ) : (
          <GridListPokemons>
            <SkeletonCardPokemon start={count} />
          </GridListPokemons>
        )}
        <ButtonDefault
          value="show less"
          disabled={isDisable || count <= 10}
          onClick={() => setCount((prev) => prev - 10)}
        />
        <ButtonDefault
          value="show more"
          disabled={isDisable || count >= listName.length}
          onClick={() => setCount((prev) => prev + 10)}
        />
      </MainStyle>
      <FooterStyle $theme={theme}>
        Pokédex &copy; 2023 - {new Date().getFullYear()}
      </FooterStyle>
    </>
  )
}

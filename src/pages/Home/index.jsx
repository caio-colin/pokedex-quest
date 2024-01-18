import { useState, useEffect, useRef } from "react"
import { HeaderStyle, MainStyle, FooterStyle } from "./styled"
import { getPokemons, getListPokemonsNames } from "../../services/requestAPI.js"
import {
  ButtonDefault,
  SkeletonCardPokemon,
  GridListPokemons,
  MultipleSeach,
} from "../../components/"

export const Home = () => {
  const countSession = parseInt(sessionStorage.getItem("countSession"))
  const namePokemonSession = JSON.parse(sessionStorage.getItem("nameSelectedOnPage"))
  const typePokemonSession = JSON.parse(sessionStorage.getItem("typeSelectedOnPage"))
  const [count, setCount] = useState(countSession || 10)
  const [loading, setLoading] = useState(true)
  const [filtering, setFiltering] = useState(false)
  const [listName, setListName] = useState([])
  const [listToShow, setListToShow] = useState([])
  const [listSearchFilter, setListSearchFilter] = useState(null)
  const prevCountRef = useRef(count)
  const isDisable = listName.length == 0 || listSearchFilter || filtering || loading

  const addPokemons = async (list) => {
    setLoading(true)
    const listSlieced = list.slice(count - 10, count)
    const newList = await getPokemons(listSlieced)
    setListToShow((prevList) => [...prevList, ...newList])
    setLoading(false)
  }

  const removePokemons = () => setListToShow((prevList) => prevList.slice(0, count))

  const handleCountSession = async (list, countSession) => {
    setLoading(true)
    const listSlieced = list.slice(0, countSession)
    const newList = await getPokemons(listSlieced)
    setListToShow(newList)
    setLoading(false)
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
    const init = async () => {
      if (countSession && listName.length == 0) {
        const list = await getListPokemonsNames()
        setListName(list)
        handleCountSession(list, countSession)
        sessionStorage.removeItem("countSession")
      } else if (!countSession && listName.length == 0) {
        const list = await getListPokemonsNames()
        setListName(list)
        addPokemons(list)
      } else {
        addPokemons(listName)
      }
    }

    const teste = async () => {
      if (listName.length == 0) {
        const list = await getListPokemonsNames()
        setListName(list)
        setLoading(false)
      }
    }

    namePokemonSession?.length > 0 || typePokemonSession?.length > 0 ? teste() : init()
  }, [namePokemonSession, typePokemonSession])

  return (
    <>
      <MainStyle>
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
        </HeaderStyle>
        {listName.length > 0 ? (
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
            <SkeletonCardPokemon start={10} />
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
      <FooterStyle>Pokédex &copy; 2023 - {new Date().getFullYear()}</FooterStyle>
    </>
  )
}

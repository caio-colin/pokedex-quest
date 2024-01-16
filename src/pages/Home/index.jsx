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
  const [count, setCount] = useState(countSession || 10)
  const [loading, setLoading] = useState(true)
  const [filtering, setFiltering] = useState(false)
  const [fullList, setFullList] = useState([])
  const [listToShow, setListToShow] = useState([])
  const [listSearchFilter, setListSearchFilter] = useState(null)
  const prevCountRef = useRef(count)
  const isDisable = fullList.length == 0 || listSearchFilter || filtering || loading

  const getNames = async () => {
    const nameList = await getListPokemonsNames()
    setFullList(nameList)

    if (!isNaN(countSession)) {
      handleCountSession(nameList, countSession)
      return
    }
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
  const handleCountSession = async (list, countSession) => {
    setLoading(true)

    const listSlieced = list.slice(0, countSession)
    const newList = await getPokemons(listSlieced)
    setListToShow(newList)

    setLoading(false)
  }

  useEffect(() => {
    if (prevCountRef.current > count) {
      removePokemons()
    } else {
      fullList.length > 0 ? addPokemons(fullList) : getNames()
    }

    prevCountRef.current = count

    sessionStorage.setItem("countSession", count)
  }, [count])

  return (
    <>
      <MainStyle>
        <HeaderStyle>
          {listToShow.length > 0 ? (
            <MultipleSeach
              listNames={fullList}
              setFiltering={setFiltering}
              setListSearchFilter={setListSearchFilter}
            />
          ) : (
            <MultipleSeach key={2} />
          )}
        </HeaderStyle>
        {listToShow.length > 0 ? (
          filtering ? (
            <GridListPokemons>
              <SkeletonCardPokemon start={countSession || 10} />
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
          disabled={isDisable || count >= fullList.length}
          onClick={() => setCount((prev) => prev + 10)}
        />
      </MainStyle>
      <FooterStyle>Pokédex &copy; 2023 - {new Date().getFullYear()}</FooterStyle>
    </>
  )
}

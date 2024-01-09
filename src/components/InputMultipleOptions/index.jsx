import { useState, useEffect, useRef } from "react"
import { StyleMultipleOptions } from "./styled"
import { InputSearch } from "../InputSearch"
import { getListPokemonsNames } from "../../services/requestAPI"
import { useFiltering } from "../../Hoocks"

export const InputMultipleOptions = ({ setPokemonSelected }) => {
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listOfPokemonNames, setListOfPokemonNames] = useState([])
  const { getListFilteredByName } = useFiltering()
  const [itsOpen, setItsOpen] = useState(false)
  const inputSetRef = useRef(null)
  const selectedRef = useRef(null)
  const selectedItem = useRef(null)
  const inputValueRef = useRef(null)
  const [positionIndex, setPositionIndex] = useState(-1)

  const listPokemonNames = getListFilteredByName(
    listOfPokemonNames,
    selectedItem.current || nameSelectedOnPage
  )

  useEffect(() => {
    ;(async () => {
      const list = await getListPokemonsNames()
      setListOfPokemonNames(list)
    })()
  }, [])
  useEffect(() => {
    const handleKeyDocument = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault()
      }
    }
    if (itsOpen) {
      document.addEventListener("keydown", handleKeyDocument)
    }
    return () => document.removeEventListener("keydown", handleKeyDocument)
  }, [itsOpen])

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
      })
    }
  }, [selectedRef.current])

  useEffect(() => {
    selectedItem.current = null

    nameSelectedOnPage != "" ? setItsOpen(true) : setItsOpen(false)
  }, [nameSelectedOnPage])

  useEffect(() => {
    if (listPokemonNames[positionIndex]) {
      setInputValue(listPokemonNames[positionIndex].name)
    }
  }, [positionIndex])

  const resetPositionAndClearSelection = () => setPositionIndex(-1)
  const handleInputBlur = () => {
    setItsOpen(false)
  }
  const setInputValue = (value) => {
    inputSetRef.current(value)
  }
  const handleInputFocus = () => {
    const position = listPokemonNames.findIndex(
      (pokemon) => pokemon.name === inputValueRef.current
    )
    setPositionIndex(position)
    setItsOpen(true)
  }

  const handleClick = (optionSelected) => {
    setPokemonSelected(optionSelected)
    resetPositionAndClearSelection()
    setInputValue(optionSelected)
    setItsOpen(false)

    selectedItem.current = optionSelected

    const focusedInput = document.activeElement

    if (focusedInput) {
      focusedInput.blur()
    }
  }
  const handleArrowDown = () => {
    console.log(positionIndex)
    setPositionIndex((prevPositionIndex) =>
      prevPositionIndex < listPokemonNames.length - 1
        ? prevPositionIndex + 1
        : listPokemonNames.length - 1
    )
  }
  const handleArrowUp = () => {
    setPositionIndex((prevPositionIndex) =>
      prevPositionIndex > 0 ? prevPositionIndex - 1 : 0
    )
  }
  const handleEnter = () => {
    const firstPokemon = listPokemonNames[0].name
    const valueIsTrue = listPokemonNames.some(
      (pokemon) => pokemon.name === inputValueRef.current
    )
    // Verifica se o valor do input esta na lista, se tiver vai fazer o fetch com o valor do input
    if (valueIsTrue) {
      handleClick(inputValueRef.current)
      return
    }

    if (listPokemonNames.length > 0 && positionIndex == -1) {
      handleClick(firstPokemon)
    }
  }

  const keyHandlers = {
    ArrowDown: () => handleArrowDown(),
    ArrowUp: () => handleArrowUp(),
    Enter: () => handleEnter(),
  }

  const handleKey = (e) => {
    if (listPokemonNames.length === 0) return

    const action = keyHandlers[e.key]
    if (action) {
      action()
    }
  }

  return (
    <div
      onKeyDown={handleKey}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      tabIndex={0}
    >
      <InputSearch
        refValue={inputValueRef}
        refSetValue={inputSetRef}
        setNameSelectedOnPage={setNameSelectedOnPage}
      />
      <StyleMultipleOptions $itsOpen={itsOpen && listPokemonNames.length > 0}>
        <ul>
          {listPokemonNames.map((pokemon, index) => (
            <li
              onMouseEnter={resetPositionAndClearSelection}
              ref={positionIndex === index ? selectedRef : null}
              className={positionIndex === index ? "selected" : null}
              key={`${pokemon.name} - ${index}`}
              onClick={() => handleClick(pokemon.name)}
            >
              <span>{"#" + String(pokemon.id).padStart(3, "0")}</span>
              <span>{pokemon.name}</span>
            </li>
          ))}
        </ul>
      </StyleMultipleOptions>
    </div>
  )
}

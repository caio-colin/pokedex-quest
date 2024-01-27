import { useState, useEffect, useRef } from "react"
import { StyleContainerInputMultipleOptions, StyleMultipleOptions } from "./styled"
import { InputSearch } from "../InputSearch"
import { getListPokemonsNames } from "../../services/requestAPI"
import { useFiltering } from "../../Hooks/index.jsx"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const InputMultipleOptions = ({ setPokemonSelected }) => {
  const listNamePokemonSession = JSON.parse(sessionStorage.getItem("listNamePokemon"))
  const [nameSelectedOnPage, setNameSelectedOnPage] = useState("")
  const [listOfPokemonNames, setListOfPokemonNames] = useState([])
  const { getListFilteredByName } = useFiltering()
  const [itsOpen, setItsOpen] = useState(false)
  const [theme] = useThemeContext()
  const inputSetRef = useRef(null) // Função para alterar o valor do input
  const selectedRef = useRef(null) // Para acompanhar o focus quando o item selecionado for alterado
  const selectedItem = useRef(null) // Para mudar a lista filtrada sem alterar o estado
  const inputValueRef = useRef(null) // Valor visual do input sem alterar o estado
  const [positionIndex, setPositionIndex] = useState(-1)
  const firstOptionActive = positionIndex == -1 && !selectedRef.current

  const listPokemonNames = getListFilteredByName(
    listOfPokemonNames,
    selectedItem.current || nameSelectedOnPage
  ).sort((a, b) => a.name.localeCompare(b.name)) // Ordena a lista de pokemons, e garantir que o pokemon selecionado no input seja sempre o primeiro

  const setInputValue = (str) => {
    const value = str.charAt(0).toUpperCase() + str.slice(1)
    inputSetRef.current(value)
  }

  useEffect(() => {
    ;(async () => {
      const list = listNamePokemonSession
        ? listNamePokemonSession
        : await getListPokemonsNames()
      setListOfPokemonNames(list)
    })()
  }, [])

  useEffect(() => {
    if (listPokemonNames[positionIndex]) {
      setInputValue(listPokemonNames[positionIndex].name)
    }
  }, [positionIndex])

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
      })
    }
  }, [selectedRef.current])

  useEffect(() => {
    selectedItem.current = null

    resetPositionAndClearSelection()

    nameSelectedOnPage != "" ? setItsOpen(true) : setItsOpen(false)
  }, [nameSelectedOnPage])

  const resetPositionAndClearSelection = () => setPositionIndex(-1)

  const handleInputBlur = () => {
    setItsOpen(false)
  }

  const handleInputFocus = () => {
    const position = listPokemonNames.findIndex(
      (pokemon) => pokemon.name === inputValueRef.current.toLowerCase()
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

  const setOptionSelected = (optionSelected) => {
    const inputValueIsValid = listPokemonNames.some(
      (pokemon) => pokemon.name === inputValueRef.current.toLowerCase()
    )
    // Se inputValueIsValid for true é porq oque tem no input corresponder a algum item da lista e ja esta focado então o focus deve ir para o item seguinte
    if (inputValueIsValid) {
      const newPosition = listPokemonNames.findIndex(
        (pokemon) => pokemon.name === inputValueRef.current.toLowerCase()
      )

      optionSelected === "ArrowDown"
        ? setPositionIndex(
            newPosition < listPokemonNames.length - 1
              ? newPosition + 1
              : listPokemonNames.length - 1
          )
        : setPositionIndex(newPosition > 0 ? newPosition - 1 : 0)
    }
  }

  const handleArrowDown = () => {
    setPositionIndex((prevPositionIndex) =>
      prevPositionIndex < listPokemonNames.length - 1
        ? prevPositionIndex + 1
        : listPokemonNames.length - 1
    )
    // Se firstOptionActive for true o focus vai estar no primeiro elemento, então quando o handleArrowDown for executado o focus vai para o segundo elemento
    firstOptionActive && setPositionIndex(1)
    setOptionSelected("ArrowDown")
  }
  const handleArrowUp = () => {
    setPositionIndex((prevPositionIndex) =>
      prevPositionIndex > 0 ? prevPositionIndex - 1 : 0
    )
    setOptionSelected("ArrowUp")
  }

  const handleEnter = () => {
    const inputValueIsValid = listPokemonNames.some(
      (pokemon) => pokemon.name === inputValueRef.current.toLowerCase()
    )
    const firstPokemon = listPokemonNames[0].name
    if (inputValueIsValid) {
      // Verifica se o valor do input esta na lista, se tiver vai fazer o fetch com o valor do input
      handleClick(inputValueRef.current.toLowerCase())
      return
    }

    if (firstPokemon) {
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

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
    }
  }

  return (
    <StyleContainerInputMultipleOptions
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
      <StyleMultipleOptions
        $theme={theme}
        $firstOptionActive={firstOptionActive}
        $itsOpen={itsOpen && listPokemonNames.length > 0}
      >
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
    </StyleContainerInputMultipleOptions>
  )
}

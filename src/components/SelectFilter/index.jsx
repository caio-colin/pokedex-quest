import { useState, useEffect, useRef } from "react"
import { IconArrow, BroomIcon } from "../icons"
import { SelectStyle } from "./styled"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const SelectFilter = ({
  list = [],
  value = "select",
  valueByFather,
  setOptionSelectedOnPage = function () {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedType, setSelectedType] = useState("")
  const optionSelected = selectedType || value
  const [positionIndex, setPositionIndex] = useState(-1)
  const [theme] = useThemeContext()
  const selectedRef = useRef(null)
  const firstOption = () => {
    return (
      <>
        <BroomIcon size={16} />
        <span>clear option</span>
      </>
    )
  }
  const optionsItens = [firstOption, ...list]

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
      })
    }
  }, [selectedRef.current])

  useEffect(() => {
    if (valueByFather) {
      handleValue(valueByFather)
    }
  }, [valueByFather])

  const handleValue = (value) => {
    setSelectedType(value)
    setOptionSelectedOnPage(value)
    sessionStorage.setItem("typeSelectedOnPage", JSON.stringify(value))
  }

  const resetPositionAndClearSelection = () => setPositionIndex(-1)

  const handleClick = (typeFilter) => {
    setIsExpanded(!isExpanded)
    handleValue(typeFilter)
  }

  const handleClear = () => {
    setIsExpanded(!isExpanded)
    handleValue("")
  }
  const handleArrowDown = () => {
    setPositionIndex((prevPositionIndex) =>
      positionIndex < optionsItens.length - 1
        ? prevPositionIndex + 1
        : optionsItens.length - 1
    )
  }
  const handleArrowUp = () => {
    setPositionIndex((prevPositionIndex) =>
      positionIndex > 0 ? prevPositionIndex - 1 : 0
    )
  }
  const handleEnter = () => {
    const pokemonSelected = optionsItens[positionIndex]

    typeof pokemonSelected === "string" ? handleClick(pokemonSelected) : handleClear()
  }

  const keyHandlers = {
    ArrowDown: () => handleArrowDown(),
    ArrowUp: () => handleArrowUp(),
    Enter: () => handleEnter(),
    Space: () => handleEnter(),
    Escape: () => setIsExpanded(false),
  }
  const handleKey = (e) => {
    if (list?.length === 0) return

    const action = keyHandlers[e.code]
    if (action) {
      action()
    }

    if (e.code === "ArrowDown" || e.code === "ArrowUp" || e.code === "Space") {
      e.preventDefault()
    }
  }
  const handleClickSelected = () => {
    resetPositionAndClearSelection()
    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
  }

  return (
    <SelectStyle
      $theme={theme}
      className={isExpanded ? "expanded" : ""}
      tabIndex={0}
      onKeyDown={handleKey}
      onBlur={() => setIsExpanded(false)}
    >
      <div onClick={handleClickSelected}>
        <span>{optionSelected}</span>
        <IconArrow size={16} />
      </div>
      <ul>
        {list &&
          optionsItens.map((item, index) => (
            <li
              onMouseEnter={resetPositionAndClearSelection}
              key={`${typeof item === "function" ? "first-option" : item} - ${index}`}
              ref={positionIndex === index ? selectedRef : null}
              className={positionIndex === index ? "selected" : ""}
              onClick={() =>
                typeof item === "function" ? handleClear() : handleClick(item)
              }
              id={typeof item === "function" ? "first-option" : item}
            >
              {typeof item === "function" ? item() : item}
            </li>
          ))}
      </ul>
    </SelectStyle>
  )
}

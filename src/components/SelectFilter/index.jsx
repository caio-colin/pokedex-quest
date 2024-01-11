import { useState, useEffect, useRef } from "react"
import { IconArrow, BroomIcon } from "../icons"
import { SelectStyle } from "./styled"

export const SelectFilter = ({
  list = [],
  value = "select",
  setOptionSelectedOnPage = function () {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedType, setSelectedType] = useState("")
  const optionSelected = selectedType || value
  const [positionIndex, setPositionIndex] = useState(-1)
  const selectedRef = useRef(null)

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: "nearest",
      })
    }
  }, [selectedRef.current])

  const resetPositionAndClearSelection = () => setPositionIndex(-1)
  const handleClick = (typeFilter) => {
    setIsExpanded(!isExpanded)
    setSelectedType(typeFilter)
    setOptionSelectedOnPage(typeFilter)
  }

  const handleClear = () => {
    setIsExpanded(!isExpanded)
    setSelectedType("")
    setOptionSelectedOnPage("")
  }
  const handleArrowDown = () => {
    setPositionIndex((prevPositionIndex) =>
      positionIndex < list.length - 1 ? prevPositionIndex + 1 : list.length - 1
    )
  }
  const handleArrowUp = () => {
    setPositionIndex((prevPositionIndex) =>
      positionIndex > 0 ? prevPositionIndex - 1 : 0
    )
  }
  const handleEnter = () => {
    const pokemonSelected = list[positionIndex]

    if (pokemonSelected) {
      handleClick(pokemonSelected)
    }
  }

  const keyHandlers = {
    ArrowDown: () => handleArrowDown(),
    ArrowUp: () => handleArrowUp(),
    Enter: () => handleEnter(),
  }
  const handleKey = (e) => {
    if (list?.length === 0) return

    const action = keyHandlers[e.key]
    if (action) {
      action()
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
    }
  }
  const handleClickSelected = () => {
    resetPositionAndClearSelection()
    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
  }

  return (
    <SelectStyle
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
        <li onClick={handleClear}>
          <BroomIcon size={16} />
          <span>to clean</span>
        </li>
        {list?.map((item, index) => (
          <li
            onMouseEnter={resetPositionAndClearSelection}
            key={`${item} - ${index}`}
            ref={positionIndex === index ? selectedRef : null}
            className={positionIndex === index ? "selected" : ""}
            onClick={() => handleClick(item)}
            id={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </SelectStyle>
  )
}

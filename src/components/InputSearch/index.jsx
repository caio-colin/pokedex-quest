import { useState, useImperativeHandle } from "react"
import { SearchIcon, CloseIcon } from "../icons"
import { InputStyle } from "./styled.jsx"

export const InputSearch = ({
  refValue,
  refSetValue,
  timeSearch = false, // Valor em milisegundos para o tempo de pesquisa
  setNameSelectedOnPage,
  onFocus,
}) => {
  const [inputValue, setInputValue] = useState("")

  useImperativeHandle(refSetValue, () => setInputValue)
  useImperativeHandle(refValue, () => inputValue)

  const handleChange = (e) => {
    const { value } = e.target
    const isEmptyValue = value == ""

    setNameSelectedOnPage && setNameSelectedOnPage(value.trim())

    setInputValue(value)

    if (isEmptyValue) {
      handleClear()
    }
  }
  const handleClear = () => {
    setInputValue("")
    setNameSelectedOnPage("")
  }
  const handleEventsProps = () => {
    onFocus && onFocus()
  }
  return (
    <InputStyle $timeSearch={timeSearch}>
      <label htmlFor="search">
        <SearchIcon size={32} />
        <input
          placeholder="Search pokemon or id"
          type="search"
          id="search"
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          onFocus={handleEventsProps}
        />
      </label>
      {inputValue && <CloseIcon size={32} onClick={handleClear} />}
    </InputStyle>
  )
}

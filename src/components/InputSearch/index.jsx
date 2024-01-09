import { useState, useImperativeHandle } from "react"
import { SearchIcon, CloseIcon } from "../icons"
import { InputStyle } from "./styled.jsx"

export const InputSearch = ({ refValue, refSetValue, setNameSelectedOnPage, onFocus }) => {
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
    <InputStyle>
      <label htmlFor="search">
        <SearchIcon size={32} />
        <input
          placeholder="Search pokemon"
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

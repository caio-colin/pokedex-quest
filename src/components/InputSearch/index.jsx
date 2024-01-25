import { useState, useImperativeHandle, useEffect } from "react"
import { SearchIcon, CloseIcon } from "../icons"
import { InputStyle } from "./styled.jsx"
import { useLocation } from "react-router-dom"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const InputSearch = ({
  refValue,
  refSetValue,
  valueByFather,
  timeSearch = false, // Valor em milisegundos para o tempo de pesquisa
  setNameSelectedOnPage,
  onFocus,
}) => {
  const [inputValue, setInputValue] = useState("")
  const { pathname } = useLocation()
  const [theme] = useThemeContext()
  useImperativeHandle(refSetValue, () => setInputValue)
  useImperativeHandle(refValue, () => inputValue)

  useEffect(() => {
    if (valueByFather) {
      handleValue(valueByFather)
    }
  }, [valueByFather])

  const handleValue = (value) => {
    // Verifica se o valor é vazio
    const isEmptyValue = value == ""

    // setNameSelectedOnPage envia para o pai o valor que foi selecionado no input
    if (setNameSelectedOnPage) {
      setNameSelectedOnPage(value.trim())
    }
    // pathname == "/" se o componente estiver no caminho raiz, salva o valor no sessionStorage
    if (pathname == "/") {
      sessionStorage.setItem("nameSelectedOnPage", JSON.stringify(value))
    }
    // Muda valor do input alterando o estado
    setInputValue(value)

    if (isEmptyValue) {
      handleClear()
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    handleValue(value)
  }

  const handleClear = () => {
    // pathname == "/" se o componente estiver no caminho raiz, salva o valor no sessionStorage
    if (pathname == "/") {
      sessionStorage.setItem("nameSelectedOnPage", JSON.stringify(""))
    }
    // Muda valor do input alterando o estado
    setInputValue("")
    // setNameSelectedOnPage envia para o pai o valor que foi selecionado no input
    if (setNameSelectedOnPage) {
      setNameSelectedOnPage("")
    }
  }
  const handleEventsProps = () => {
    onFocus && onFocus()
  }
  return (
    <InputStyle $theme={theme} $timeSearch={timeSearch}>
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

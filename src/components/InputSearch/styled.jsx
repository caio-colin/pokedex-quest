import styled from "styled-components"

export const InputStyle = styled.div`
  height: 2rem; /* Se altera a altura, deve alterar o calc do padding do SVG */
  display: flex;
  overflow: hidden;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 15rem;
  svg {
    transition: transform ease-in-out 0.1s;
    padding: 0 calc(2rem / 4);
    cursor: pointer;
  }

  svg:active,
  svg:active {
    transform: scale(1.10);
  }
  label {
    display: flex;
    align-items: center;
    width: 100%;
    input[type="search"]:focus::placeholder {
      color: transparent;
    }
    input[type="search"] {
      padding: 0 0.5rem;
      width: 100%;
      outline: none;
      border: none;
      -moz-appearance: none; /* Ocultar o botão "X" padrao no Firefox */
      appearance: none;
    }
    /* Ocultar botão "X" padrao no navegadores versões mais recentes do Chrome e de outros navegadores baseados no Chromium */
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-clear-button {
      -webkit-appearance: none;
      appearance: none;
      display: none;
    }
  }
`

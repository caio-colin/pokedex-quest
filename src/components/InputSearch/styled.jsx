import styled from "styled-components"

export const InputStyle = styled.div`
  height: 2rem; /* Se altera a altura, deve alterar o calc do padding do SVG */
  display: flex;
  overflow: hidden;
  align-items: center;
  border: 1px solid ${({ $theme }) => $theme.container.borderColor};
  border-radius: 5px;
  width: 100%;
  max-width: 15.25rem;
  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
  }
  svg {
    transition: transform ease-in-out 0.1s;
    padding: 0 calc(2rem / 4);
    cursor: pointer;
    fill: ${({ $theme }) => $theme.input.textColor};
  }

  svg:active,
  svg:active {
    transform: scale(1.1);
  }
  label {
    display: flex;
    align-items: center;
    width: 100%;
    input[type="search"]::placeholder {
      color: ${({ $theme }) => $theme.input.placeholderColor};
    }
    input[type="search"]:focus::placeholder {
      color: transparent;
    }
    input[type="search"] {
      color: ${({ $theme }) => $theme.input.textColor};
      padding: 0 0.5rem;
      width: 100%;
      outline: none;
      border: none;
      -moz-appearance: none; /* Ocultar o botão "X" padrao no Firefox */
      appearance: none;
      background-color: transparent;
    }

    /* Ocultar botão "X" padrao no navegadores versões mais recentes do Chrome e de outros navegadores baseados no Chromium */
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-clear-button {
      -webkit-appearance: none;
      appearance: none;
      display: none;
    }
  }
  & {
    position: relative;
  }
  &::after {
    content: "";
    background-color: ${({ $theme }) => $theme.input.animationColor};
    top: 0;
    bottom: 0;
    left: 0;
    ${({ $timeSearch }) =>
      $timeSearch
        ? `animation: background-progress ${$timeSearch}ms forwards;`
        : `animation: background-desprogress ${$timeSearch}ms forwards;`}
    border-radius: 4px;
    display: block;
    position: absolute;
  }
  @keyframes background-desprogress {
    from {
      right: 0%;
    }
    to {
      right: 100%;
    }
  }
  @keyframes background-progress {
    from {
      right: 100%;
    }
    to {
      right: 0%;
    }
  }
`

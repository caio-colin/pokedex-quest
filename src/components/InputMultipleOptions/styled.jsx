import styled from "styled-components"

export const StyleContainerInputMultipleOptions = styled.div`
  max-width: 15.25rem; // Valor de largura original do InputSearch (15.25rem)
  width: 100%;
  // InputSearch é o primeiro filho (first-child)
  // Ele contem (max-width: 15.25rem), então removendo com unset posso controlar o tamanho do componente aqui
  :first-child {
    max-width: unset;
  }
`

export const StyleMultipleOptions = styled.div`
  color: ${({ $theme }) => $theme.container.textColor};
  position: relative;
  z-index: 2;
  display: ${({ $itsOpen }) => ($itsOpen > 0 ? "block" : "none")};
  user-select: none;
  &,
  ul > * {
    transition: color ease-in-out 0.1s;
  }
  ul {
    top: 0.2rem;
    border-radius: 5px;
    background-color: ${({ $theme }) => $theme.container.backgroundColor};
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 9px 24px;
    position: absolute;
    width: 100%;
    max-height: calc(
      1.5rem * 12
    ); // O valor multiplicado é referente a quantidade intes a ser exibida
    overflow-y: auto;
  }
  li {
    margin: 0.1rem 0;
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-transform: capitalize;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    background-color: ${({ $theme }) =>
      $theme.theme === "light" ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.03)"};
    position: relative;
  }
  ${({ $firstOptionActive }) => $firstOptionActive && "li:first-child"},
  .selected,
  li:hover {
    background-color: ${({ $theme }) =>
      $theme.theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  }
  li:active {
    background-color: ${({ $theme }) =>
      $theme.theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  }
  li span:nth-child(1) {
    width: 3.8rem;
    display: inline-block;
  }
  li span:nth-child(2) {
    width: 9.4rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

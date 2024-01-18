import styled from "styled-components"

export const MainStyle = styled.main`
  padding: 1rem;
  border: 1px solid #ccc;
  box-shadow: 0rem 0rem 0.35rem rgba(0, 0, 0, 0.75);
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    "header header"
    "main main"
    "button-decrement button-cremate";
  row-gap: 1rem;
  & > :nth-child(2) {
    grid-area: main;
  }
  header {
    grid-area: header;
  }
  button:nth-last-child(2) {
    justify-self: flex-start;
    grid-area: button-decrement;
  }
  button:last-child {
    justify-self: flex-end;
    grid-area: button-cremate;
  }
  @media (max-width: 640px) {
    grid-template-areas:
      "header header"
      "main main"
      "button-decrement button-decrement"
      "button-cremate button-cremate";
    button:nth-last-child(2) {
      justify-self: unset;
    }
    button:last-child {
      justify-self: unset;
    }
  }
`
export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 640px) {
    flex-direction: column;
    // Padronizar o tamanho dos filhos do header
    > * {
      width: 100%;
      max-width: 22.6rem;
    }
  }
  @media (max-width: 450px) {
    // Padronizar o tamanho dos filhos do header
    > * {
      max-width: 19.45625rem;
    }
    @media (max-width: 375px) {
      // Padronizar o tamanho dos filhos do header
      > * {
        max-width: 15rem;
      }
    }
  }
`
export const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
`
export const StyleHomePage = styled.button`
  border: 1px solid #ccc;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 2rem;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;
  &:hover {
    fill: rgb(0, 191, 255);
    color: rgb(0, 191, 255);
    border-color: rgb(0, 191, 255);
  }
  &:active {
    fill: #00bd10;
    color: #00bd10;
    border-color: #00bd10;
  }
  @media (max-width: 640px) {
    :nth-child(2) {
      margin: auto;
      // Os 16px é referente ao tamanho do icone que divide espaço com o botão
      transform: translateX(-16px);
    }
  }
`

import styled from "styled-components"

export const MainStyle = styled.main`
  padding: 1rem;
  border: 1px solid ${({ $theme }) => $theme.container.borderColor};
  box-shadow: 0rem 0rem 0.35rem ${({ $theme }) => $theme.container.boxShadow};
  background-color: ${({ $theme }) => $theme.container.backgroundColor};
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    "header header"
    "main main"
    "navigate-pokemon navigate-pokemon";
  row-gap: 1rem;
  & > :nth-child(2) {
    grid-area: main;
  }
  header {
    grid-area: header;
  }
  div:last-child {
    grid-area: navigate-pokemon;
  }
  @media (max-width: 450px) {
    border-radius: unset;
    border-radius: 0 0 5px 5px;
    width: 100%;
  }
`
export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  > :nth-child(2) {
    margin-right: auto;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    // Padronizar o tamanho dos filhos do header

    > * {
      width: 100%;
      max-width: 100%;
    }
    > :last-child {
      width: 3rem;
    }
  }
`
export const FooterStyle = styled.footer`
  width: 100%;
  text-align: center;
  color: white;
`
export const StyleHomePage = styled.button`
  transition: unset;
  fill: ${({ $theme }) => $theme.container.textColor};
  color: ${({ $theme }) => $theme.container.textColor};
  border: 1px solid ${({ $theme }) => $theme.container.borderColor};
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
  & > * {
    transition: unset;
  }

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

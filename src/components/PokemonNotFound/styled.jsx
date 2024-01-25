import styled from "styled-components"

export const StylePokemonNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-transform: capitalize;
  color: ${({ $theme }) => $theme.container.textColor};
  img {
    width: 10rem;
  }
`

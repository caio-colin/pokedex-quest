import styled from "styled-components"

export const StyleNaviagatePokemon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 640px) {
    flex-direction: column;
    > * {
      width: 100%;
    }
  }
`

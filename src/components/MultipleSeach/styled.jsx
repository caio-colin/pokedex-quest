import styled from "styled-components"

export const StyleContainerMultipleSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

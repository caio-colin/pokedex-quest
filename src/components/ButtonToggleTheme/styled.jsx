import styled from "styled-components"

export const StyleButtonToggle = styled.div`
  position: relative;
  width: 3rem;
  height: 1.6rem;
  border-radius: 1rem;
  background-color: ${({ $theme }) => $theme.container.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  cursor: pointer;
  svg:nth-child(1) {
    fill: white;
  }
  div {
    position: absolute;
    left: ${({ $theme }) => ($theme.theme === "light" ? "0.1rem" : "1.5rem")};
    transition: left ease-in-out 0.5s;
    width: 1.4rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: ${({ $theme }) => $theme.container.backgroundColor};
  }
`

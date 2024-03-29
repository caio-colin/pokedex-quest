import styled from "styled-components"

export const SelectStyle = styled.div`
  transition: color ease-in-out 0.1s, background-color ease-in-out 0.5s;
  color: ${({ $theme }) => $theme.container.textColor};
  position: relative;
  z-index: 3;
  text-transform: capitalize;
  text-align: center;
  width: 10rem;
  user-select: none;
  svg {
    fill: ${({ $theme }) => $theme.container.textColor};
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${({ $theme }) => $theme.container.borderColor};
    height: 2rem;
    z-index: 3;
    position: sticky;
    background-color: ${({ $theme }) => $theme.container.backgroundColor};
    padding: 0 0.5rem;
  }
  &.expanded ul {
    max-height: 13.98rem;
    padding: 0.5rem 0;
    overflow-y: auto;
  }
  & > div svg {
    transition: transform ease-in-out 0.5s, fill ease-in-out 0.5s;
  }
  &.expanded > div svg {
    transform: rotate(90deg);
  }
  ul {
    overflow: hidden;
    max-height: 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    left: 0;
    top: 1.7rem;
    border-radius: 0 0 5px 5px;
    ${({ $theme }) =>
      $theme.theme === "light"
        ? `box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 9px 24px;`
        : `box-shadow: rgba(75, 74, 74, 0.05) 0px 0px 0px 1px, rgba(75, 74, 74, 0.1) 0px 3px 6px,
      rgba(75, 74, 74, 0.2) 0px 9px 24px;`}

    transition: max-height ease-in-out 0.5s, padding ease-in-out 0.5s, background-color ease-in-out 0.5s;
    background-color: ${({ $theme }) => $theme.container.backgroundColor};
    z-index: 2;
    scrollbar-gutter: stable;
    &::-moz-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    li {
      transition: color ease-in-out 0.5s;
      margin: 0.2rem 0;
      padding: 0 0.5rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2rem;
      background-color: ${({ $theme }) =>
        $theme.theme === "light" ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.03)"};
    }
    li.selected,
    li:hover {
      background-color: ${({ $theme }) =>
        $theme.theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
    }

    li:active {
      background-color: ${({ $theme }) =>
        $theme.theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
    }
  }
`

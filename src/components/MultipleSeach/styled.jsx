import styled from "styled-components"

export const StyleContainerMultipleSearch = styled.div`
  z-index: 99999;
  background-color: ${({ $theme }) => $theme.container.backgroundColor};
  + span {
    left: 0;
    position: absolute;
    color: transparent;
    user-select: none;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
  @keyframes fade-in-inView-multipleSeach {
    0% {
      margin-top: -100%;
    }
    100% {
      margin-top: 0%;
    }
  }
  @media (max-width: 640px) {
    ${({ $isElementAboveViewport, $widthParent }) =>
      $isElementAboveViewport
        ? `
          position: fixed;
          width: calc(${$widthParent / 16 + "rem"} + 2rem);
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: fade-in-inView-multipleSeach ease-in-out 700ms;
          box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
            rgba(15, 15, 15, 0.2) 0px 9px 24px;
          > div {
            padding: 1rem;
          }`
        : null}
  }
`

import styled from "styled-components"

export const StyleMultipleOptions = styled.div`
  position: relative;
  z-index: 2;
  display: ${({ $itsOpen }) => ($itsOpen > 0 ? "block" : "none")};
  user-select: none;
  ul {
    top: 0.2rem;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px,
      rgba(15, 15, 15, 0.2) 0px 9px 24px;
    position: absolute;
    width: 100%;
    max-height: calc(1.5rem * 12); // O valor multiplicado é referente a quantidade intes a ser exibida
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
    background-color: rgba(0, 0, 0, 0.03);
    position: relative;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .selected,
  li:active {
    background-color: rgba(0, 0, 0, 0.2);
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

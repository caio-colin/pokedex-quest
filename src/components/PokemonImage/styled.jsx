import styled from "styled-components"

export const ImgPokemonStyle = styled.img`
  display: ${({ $laodingImg }) => ($laodingImg ? "none" : "block")};
  object-fit: ${({ $imageAvailable }) => ($imageAvailable ? "fill" : "cover")};
  border-radius: 10px;
`

import styled from "styled-components"

const transparence = 0.7

export const colors = [
  `rgba(255, 0, 0, ${transparence})`,
  `rgba(255, 38, 0, ${transparence})`,
  `rgba(255, 76, 0, ${transparence})`,
  `rgba(255, 114, 0, ${transparence})`,
  `rgba(255, 152, 0, ${transparence})`,
  `rgba(255, 190, 0, ${transparence})`,
  `rgba(255, 219, 0, ${transparence})`,
  `rgba(255, 237, 0, ${transparence})`,
  `rgba(255, 245, 0, ${transparence})`,
  `rgba(255, 252, 0, ${transparence})`,
  `rgba(255, 255, 0, ${transparence})`,
  `rgba(236, 255, 0, ${transparence})`,
  `rgba(217, 255, 0, ${transparence})`,
  `rgba(198, 255, 0, ${transparence})`,
  `rgba(179, 255, 0, ${transparence})`,
  `rgba(159, 255, 0, ${transparence})`,
  `rgba(140, 255, 0, ${transparence})`,
  `rgba(121, 255, 0, ${transparence})`,
]

export const StyleBorderProgressBar = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid #ccc;
  padding: 0.1rem;
  border-radius: 3px;
`
export const StyleProgresBar = styled.div`
  height: 100%;
  width: ${({ $value, $maxvalue }) => ($value * 100) / $maxvalue + "%"};
  div{
    height: 100%;
    border-radius: 3px;
    background-color: ${({ $value, $maxvalue }) => getColor($value, $maxvalue)};
    animation: expandProgressBar ease-in-out 1.5s;
  }
  @keyframes expandProgressBar {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`

const getColor = (value, maxvalue) => {
  const position = Math.round((value / maxvalue) * colors.length)
  return colors[position]
}

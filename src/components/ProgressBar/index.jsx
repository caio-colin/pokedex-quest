import { StyleBorderProgressBar, StyleProgresBar } from "./styled"

export const ProgressBar = ({ width, height, value, maxvalue }) => {
  return (
    <StyleBorderProgressBar width={width} height={height}>
      <StyleProgresBar $value={value} $maxvalue={maxvalue}>
        <div></div>
      </StyleProgresBar>
    </StyleBorderProgressBar>
  )
}

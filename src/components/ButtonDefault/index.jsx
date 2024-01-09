import { ButtonStyle } from "./styled"

export const ButtonDefault = (props) => {
  return <ButtonStyle {...props}>{props.value}</ButtonStyle>
}

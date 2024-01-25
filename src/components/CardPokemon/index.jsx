import { CardStyle, TypeStyle } from "./styled"
import { PokemonImage } from "../PokemonImage"
import { forwardRef } from "react"
import { useThemeContext } from "../../contexts/Theme/ThemeProvider.jsx"

export const CardPokemon = forwardRef(({ id, sprites, name, types }, ref) => {
  const formattedId = String(id).padStart(3, "0")
  const [theme] = useThemeContext()

  return (
    <CardStyle $theme={theme} type={types[0].type.name} ref={ref}>
      <span>#{formattedId}</span>
      <PokemonImage width={140.8} height={140.8} name={name} sprite={sprites} />
      <ul>
        {types.map((type, index) => (
          <TypeStyle type={type.type.name} key={`${id} - ${index}`}>
            {type.type.name}
          </TypeStyle>
        ))}
      </ul>
      <h3>{name}</h3>
    </CardStyle>
  )
})

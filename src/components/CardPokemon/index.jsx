import { CardStyle, TypeStyle } from "./styled"
import { PokemonImage } from "../PokemonImage"

export const CardPokemon = ({ id, sprites, name, types }) => {
  const formattedId = String(id).padStart(3, "0")

  return (
    <CardStyle type={types[0].type.name}>
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
}

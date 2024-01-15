import { ProgressBar } from "../../components/ProgressBar/"
import { StyleCardPokemonDetails } from "./styled"
import { typeColors } from "../../utils/typeColors.js"
import { PokemonImage } from "../PokemonImage/"
import { SkeletonPokemonDetail } from "./SkeletonPokemonDetail.jsx"

export const PokemonDetail = ({ loading, pokemonShow }) => {
  return loading ? (
    <SkeletonPokemonDetail />
  ) : (
    <StyleCardPokemonDetails
      $loading={false}
      $typeColor={pokemonShow?.types[0].type.name}
    >
      <section className="info box-shadown">
        <div className="name-id">
          <h3>{pokemonShow.name}</h3>
          <span>N{String(pokemonShow.id).padStart(3, "0")}</span>
        </div>

        <PokemonImage
          name={pokemonShow.name}
          sprite={pokemonShow.sprites}
          width={336}
          height={336}
        />
      </section>
      <section className="type box-shadown">
        <h4>type</h4>
        <ul>
          {pokemonShow.types.map((type, index) => (
            <li
              key={`${pokemonShow.id} - Type ${index}`}
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="stats box-shadown">
        <h4>stats</h4>
        <ul>
          {pokemonShow.stats.map((stat, index) => (
            <li key={`${pokemonShow.id} - Stat ${index}`}>
              <p>{stat.stat.name}</p>
              <ProgressBar
                width={110}
                height={18}
                value={stat.base_stat}
                maxvalue={255}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="moves box-shadown">
        <h4>movements</h4>
        <ul>
          {pokemonShow.moves.length > 0 ? (
            pokemonShow.moves.map((move, index) => (
              <li key={`${pokemonShow.id} - Move ${index}`}>{move.move.name}</li>
            ))
          ) : (
            <li>No move</li>
          )}
        </ul>
      </section>
      <section className="abilities box-shadown">
        <h4>abilities</h4>
        <ul>
          {pokemonShow.abilities.map((ability, index) => (
            <li key={`${pokemonShow.id} - Ability ${index}`}>
              <h5>{ability.ability.name}</h5>
              <p>{ability.ability.skill_description}</p>
            </li>
          ))}
        </ul>
      </section>
    </StyleCardPokemonDetails>
  )
}

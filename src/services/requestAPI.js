export async function getPokemons(nameOrId) {
  const listPokemonsNames = (nameOrId) => {
    if (Array.isArray(nameOrId)) {
      return nameOrId
    } else {
      const normalizeName = nameOrId
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, "")

      return [
        {
          name: nameOrId,
          url: `https://pokeapi.co/api/v2/pokemon/${normalizeName}/`,
        },
      ]
    }
  }

  const pokemonList = listPokemonsNames(nameOrId)

  try {
    const listPokemons = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const response = await fetch(pokemon.url)

        if (!response.ok) {
          throw new Error(`Falha ao obter Pokemon: ${pokemon.name}`)
        }

        const result = await response.json()
        return result
      })
    )

    return listPokemons
  } catch (error) {
    console.error("Erro na requisição da API:", error)
    return new Promise((resolver) => setTimeout(() => resolver([]), 1000))
  }
}

export async function getListPokemonsNames() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Falha ao obter lista de nomes")
    }

    const result = await response.json()

    result.results.forEach((pokemonName) => {
      // Faço recortes na url criando um array com a string
      const parts = pokemonName.url.split("/")
      // Atribuo o id no objeto
      pokemonName.id = parts[parts.length - 2]
    })

    return result.results
  } catch (error) {
    console.error("Erro na requisição da API:", error)
  }
}

export async function getDecriptionsAbilities(pokemon) {
  try {
    for (const ability of pokemon.abilities) {
      const response = await fetch(ability.ability.url)

      if (!response.ok) {
        throw new Error(
          `Falha ao obter descrição de habilidades do pokemon ${pokemon.name}`
        )
      }

      const result = await response.json()

      const description = result.effect_entries.find(
        (description) => description.language.name == "en"
      )?.effect

      ability.ability["skill_description"] = description || "No description"
    }

    return await pokemon
  } catch (error) {
    console.error("Erro ao tentar pegar descrição:", error)
    throw error
  }
}

export async function getTypes() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type/")
    const result = await response.json()

    if (!response.ok) {
      throw new Error("Erro ao solicitar typos")
    }

    const typesPokemons = await Promise.all(
      result.results.map(async (type) => {
        try {
          const response = await fetch(type.url)
          const result = await response.json()

          if (!response.ok) {
            throw new Error("Erro ao tentar pegar typos")
          }
          return result
        } catch (error) {
          console.error(`Erro ao pegar tipo ${type.name}`, error)
        }
      })
    )

    const typesPokemonsFiltered = typesPokemons.filter(
      (typePokemon) => typePokemon.pokemon.length > 0
    )
    return typesPokemonsFiltered
  } catch (error) {
    console.error("Erro", error)
  }
}

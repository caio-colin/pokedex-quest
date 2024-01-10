import { useFiltering } from "./UseFiltering"

export const useConditionFiltering = (
  nameSelectedOnPage,
  listPokemonsByType,
  fullList
  ) => {
  const { getListFilteredByName } = useFiltering()
  // A função getFilteredPokemonName garante que o filtro seja feito utilizando a propriedade "name", oq resolve o problema com o fato do pokemon ser pesquisado por ID e depois o usuário associar a atual pesquisa com o tipo de pokemon
  function getFilteredPokemonName() {
    return pokemonsSearchedByName.length === 1
      ? pokemonsSearchedByName[0].name
      : nameSelectedOnPage
  }
  const pokemonsSearchedByName = getListFilteredByName(fullList, nameSelectedOnPage)
  const pokemonsSearchedByNameAndType = getListFilteredByName(
    listPokemonsByType,
    getFilteredPokemonName()
  )

  const conditionMapping = [
    {
      condition: nameSelectedOnPage != "" && pokemonsSearchedByName.length == 0,
      result: [],
    },
    {
      condition: pokemonsSearchedByName.length > 0 && listPokemonsByType.length == 0,
      result: pokemonsSearchedByName,
    },
    {
      condition: listPokemonsByType.length > 0 && pokemonsSearchedByName.length == 0,
      result: listPokemonsByType,
    },
    {
      condition: listPokemonsByType.length > 0 && pokemonsSearchedByName.length > 0,
      result: pokemonsSearchedByNameAndType,
    },
  ]

  return (
    conditionMapping.find((conditionObject) => conditionObject.condition)?.result || []
  )
}


# Desafio DevQuest - Pokedex SPA em React 🚀

<div style="margin: 5rem 0;display: flex; gap: 2rem; justify-content: center; align-items: center; flex-wrap:wrap;">
  <img style="width: 10rem; border-radius: 20px;" src="./public/img/SCLDj.gif">
  <div class="container" style="position: relative;min-width: 30rem;">
  <img src="./public/img/device.png"
  style="width: 30rem;"
  alt="imagem-desktop">
  <div style="width: 23.55rem;height: 100%;background-image: url(./public/img/SCLD0.gif);background-repeat: no-repeat;background-size: 30rem;background-position: center center;position: absolute;top: -3px;left: 50%;transform: translateX(-50%);border-radius: 10px 10px 0 0;"></div>
</div>
</div>

## 📝Propósito da Aplicação 📝

Este projeto foi desenvolvido como parte do Desafio DevQuest para simular um teste técnico em um processo seletivo de frontend. A aplicação é uma Single Page Application (SPA) que utiliza a API [PokeAPI](https://pokeapi.co/) para exibir uma lista de Pokémons, permitindo aos usuários visualizar detalhes individuais de cada Pokémon. Além disso, a aplicação oferece a funcionalidade de alternar entre os temas claro e escuro.

## 🕹️ Funcionalidades da Aplicação 🕹️

1. **Listagem de Pokémons na Página Inicial:**

   - Exibe uma lista inicial de 10 Pokémons com imagem e nome.
   - Possui um botão "Show More" que carrega mais 10 Pokémons quando clicado.
   - Possui um botão "Show Less" que remove 10 Pokémons quando clicado.

2. **Detalhes do Pokémon:**

   - Ao clicar em um Pokémon na lista, o usuário é redirecionado para uma página interna com informações detalhadas.
   - Detalhes incluem a imagem do Pokémon, nome, lista de movimentos (moves), lista de habilidades (abilities) e o tipo do Pokémon.

3. **Alternador de Tema Claro/Escuro:**
   - Na página inicial, há um botão que permite alternar entre os temas claro e escuro.

## 💡 Detalhes da Implementação 💡

Durante o desenvolvimento desta aplicação, foram incorporadas várias considerações especiais e características únicas para proporcionar uma experiência aprimorada ao usuário:

### Busca Flexível de Pokémon 🔍

A funcionalidade de busca foi estendida para permitir que o usuário pesquise Pokémon de várias maneiras, tanto individualmente por nome quanto preenchendo vários critérios. Isso é possível graças a uma lógica personalizada que lida com as informações fornecidas pelo usuário e realiza buscas eficientes na API, garantindo uma experiência de busca flexível e intuitiva.

### Tratamento de Pokémon sem Imagens 🖼️

Para Pokémon que não possuem imagens disponíveis na API, a aplicação apresenta uma imagem alternativa acompanhada do texto "No Image Available". Isso assegura uma apresentação consistente e informativa, mantendo a integridade visual da interface do usuário.

### Gerenciamento de Temas 🌙

A aplicação oferece uma funcionalidade de alternância de tema entre claro e escuro. As preferências do usuário são salvas localmente, permitindo que, ao retornar à página, a experiência visual seja mantida de acordo com as configurações anteriores. Além disso, a aplicação detecta automaticamente o tema do sistema do usuário durante o primeiro acesso, proporcionando uma experiência inicial alinhada com as preferências do sistema.

### Desempenho Otimizado na Busca ⏱️

Considerando a vasta quantidade de dados disponíveis na API, a busca por Pokémon é otimizada para melhorar o desempenho. A aplicação realiza fetch apenas quando há pelo menos um resultado a ser exibido, limitando a busca para mostrar uma quantidade gerenciável de informações (por exemplo, os primeiros 200 resultados), garantindo uma experiência de usuário responsiva e eficiente.

Essas considerações foram incorporadas para proporcionar uma aplicação robusta, amigável e eficiente, lidando de forma elegante com várias situações e requisitos.

---

## 📝 Requisitos do Teste 📝

O projeto foi desenvolvido para atender aos seguintes requisitos do teste:

- Criar uma Home (página inicial) de listagem de alguns pokemons, utilizando a api [PokeAPI](https://pokeapi.co/).
- Criar uma página interna de detalhe do pokemon.
- A home deve apresentar uma listagem com 10 pokemons iniciais.
- A home deve ter um botão "Carregar mais" abaixo dessa lista, que quando clicado deve buscar mais 10 pokemons e adicionar a listagem atual.
- Essa listagem deve mostrar a imagem e nome de cada pokemon.
- Na listagem cada pokemon deve ser clicável e ao clicar o usuário deve poder acessar uma página interna desse pokemon com informações detalhadas.
- Na página de detalhes devem aparecer as seguintes informações:
  - Imagem do pokemon
  - Nome
  - Lista de movimentos do pokemon (moves)
  - Lista de habilidades do pokemon (abilities)
  - A lista de habilidades deve apresentar o nome e o texto descritivo da habilidade
  - Tipo do pokemon (type)
- A home deve ter um botão para que o usuário possa alternar de cor entre tema claro e tema escuro (light/dark).

### 📚 Requisitos Técnicos 📚

- A aplicação deverá ser Single Page Application (SPA).
- Utilizar React.js para o desenvolvimento da aplicação.
- Utilizar Context API para criação do Theme Toggler (Alternador entre tema claro e escuro).
- Utilizar styled-components para estilização dos componentes.
- Utilizar react-router-dom para a navegação entre as páginas.

---

## 🔧 Ferramentas Utilizadas 🔧

- **React.js (Requisito do teste):** Conhecido pela sua popularidade, eficiência e flexibilidade para o desenvolvimento de SPAs .
- **Context API (Requisito do teste):** Utilizado para criar o Theme Toggler, permitindo a alternância entre temas claro e escuro de forma global na aplicação.
- **Styled-components (Requisito do teste):** Escolhido para a estilização dos componentes, proporcionando um código mais legível e fácil de manter.
- **React Router Dom (Requisito do teste):** Utilizado para facilitar a navegação entre as páginas da aplicação.
- **React Transition Group:** Utilizado para criar transições visuais atrativas, como adicionar e remover Pokémon na página inicial, proporcionando uma experiência de usuário mais rica.
- **React Loading Skeleton:** Implementado para lidar com momentos em que é necessário fazer fetch, evitando travamento da tela e melhorando a experiência do usuário.
- **React Intersection Observer:** Utilizado para criar efeitos visuais, como animações ao voltar da página de detalhes para a página inicial, e para melhorar a navegação, como manter um header fixo no mobile e mostrar um botão de retorno ao topo.

---

## 📜 Decisões Adotadas 📜

- **Organização do Projeto:** A estrutura do projeto foi organizada de maneira intuitiva, separando os componentes, páginas e estilos em diretórios distintos.
- **Estilo e Criatividade:** O foco foi na concepção de um design cativante e acolhedor, com a aspiração de atingir a máxima intuitividade. A intenção é proporcionar uma interação fácil e natural para o usuário, elevando a experiência a um patamar mais envolvente e agradável.
- **Definição Inicial do Tema:** Durante o primeiro acesso à página, o tema é automaticamente definido de acordo com as preferências do sistema do usuário. Isso assegura uma experiência inicial alinhada com as configurações globais do dispositivo, proporcionando uma entrada amigável e intuitiva ao usuário na aplicação.
- **Desempenho Otimizado na Busca:** A lógica elaborada para esta funcionalidade visa proporcionar a melhor experiência possível ao usuário durante a busca por Pokémon, seja por nome, tipo ou ambos os critérios. Foi cuidadosamente projetada para evitar sobrecarregar a tela do usuário, limitando de forma consciente o resultado da busca e garantindo uma apresentação clara e relevante.
- **Experiência de Retorno à Página Principal:** Aprimorando a usabilidade, a aplicação armazena a pesquisa realizada pelo usuário na página inicial. Isso garante que, ao retornar da página de detalhes, o usuário retome exatamente de onde parou, proporcionando uma experiência contínua e sem interrupções. Além disso, o último Pokémon selecionado é destacado através de uma animação no momento do retorno, adicionando um toque visual agradável e tornando a navegação mais fluida e amigável. Essas medidas foram implementadas com o objetivo de otimizar a experiência do usuário durante sua interação com a aplicação.

## 👣 Passo a Passo para Executar o Projeto Localmente 👣

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/caio-colin/pokedex-quest
   cd pokedex-quest
   ```

2. **Instale as Dependências:**

   ```bash
   npm install

   ```

3. **Execute a Aplicação:**

   ```bash
     npm start
   ```

4. **Acesse no Navegador:**
   Abra o navegador e acesse http://localhost:5173/

## 🗒️ Observações 🗒️

Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de seguir os passos acima.

---

**Desenvolvido por Caio Colin - https://github.com/caio-colin**

## 🌐 Acesse a Aplicação Online 🌐

Este projeto está implantado no Vercel e pode ser acessado online. Clique no link abaixo para visualizar a aplicação:

[Visualizar no Vercel](https://pokedex-quest.vercel.app/)

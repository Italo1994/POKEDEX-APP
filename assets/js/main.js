function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map( (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertPokemonToList(pokemon) {
    return `
    <li class="pokemon">
        <!-- k4ng0gh -->
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>

            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
        </div>
    </li>
    `;
}

const pokemonOl = document.getElementById("pokemonList");

pokeApi.getPokemons().then( (pokemonList = []) => {
            const newList = pokemonList.map( (pokemon) => convertPokemonToList(pokemon))

            const newHtml = newList.join('');

            pokemonOl.innerHTML += newHtml;
        })
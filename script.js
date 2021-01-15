//James Q Quick yt used as rough resource for DOM

let baseURL = 'https://pokeapi.co/api/v2/pokemon/';

let pokeContainer = document.querySelector('.pokeContainer');
let logo = document.getElementById('pokeLogo');
logo.addEventListener('click', fetchPoke);


function fetchPoke() {
    const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokemons) => `
        <li class="poke">
            <img class="poke-image" src="${pokemons.image}"/>
            <h2 class="poke-title">${pokemons.id}. ${pokemons.name}</h2>
            <p class="poke-type">Type: ${pokemons.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

    let logoContainer = document.getElementById('logoContainer');
    logoContainer.removeChild(logo);
}


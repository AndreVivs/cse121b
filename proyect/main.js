/* Declare and initialize global variables */
const container = document.querySelector('#containerCards');
const abcOptions = document.getElementById('options');
let alphabet = ['A - Z','Z - A','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','No Filter'];
let pokemonList = [];

/* async getData Function using fetch() */
const getData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=200');
        const data = await response.json();
        pokemonList = data.results;
        console.log(pokemonList);

        displayPokemon(pokemonList);
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
};

/* async displayPokemon Function */
const displayPokemon = async pokemonList => {

    for (const pokemon of pokemonList) {
        try {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();
            card(pokemonData)
            
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    }
};

const card = (pokemonData) => {

    const article = document.createElement('article');
        article.style.border = '1px solid #ccc';
        article.style.borderRadius = '10px';
        article.style.boxShadow = '9px 7px 8px rgba(0, 0, 0, 0.1)';
        article.style.width = '150px';
        article.style.padding = '15px';
        article.style.textAlign = 'center';
        article.style.margin = '8px';

    const h3 = document.createElement('h3');
    h3.textContent = pokemonData.name;
    article.appendChild(h3);
    
    if (pokemonData.sprites && pokemonData.sprites.front_default) {
        const img = document.createElement('img');
        img.src = pokemonData.sprites.front_default;
        img.alt = `Image of ${pokemonData.name}`;

            img.style.width = '120px';
            img.style.height = '120px';
            img.style.margin = '10px auto';
            img.style.display = 'block';

        article.appendChild(img);
    } else {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = "Image not available";
        article.appendChild(errorMsg);
    }

    container.appendChild(article);
};


const abc = (alphabet) => {
    alphabet.forEach(function(letter) {
        const option = document.createElement('option');
        option.value = letter;
        option.textContent = letter;
        abcOptions.appendChild(option);
    });
};


const sort = (pokemonList, option) => {
    let sortedPokemons;

    if (option == 'A - Z') {
        sortedPokemons = pokemonList.sort(function(a, z) {
            if (a.name < z.name) return -1;
            if (a.name > z.name) return 1;
            return 0;
        });
    }
    
    if (option == 'Z - A') {
        sortedPokemons = pokemonList.sort(function(a, z) {
            if (a.name < z.name) return 1;
            if (a.name > z.name) return -1;
            return 0;
        });
    }

    reset();
    displayPokemon(sortedPokemons);
};

const filter = (pokemonList, option) => {
    const pokemonsFiltered = pokemonList.filter(pokemon => pokemon.name.startsWith(option.toLowerCase()));
    reset();
    displayPokemon(pokemonsFiltered);
};

const reset = () => {
    container.innerHTML = '';
};

const options = pokemonList => {
    reset();
    const option = document.getElementById('options').value;

    switch (option) {
        case 'A - Z':
            sort(pokemonList, option)
            break;
        case 'Z - A':
            sort(pokemonList, option)
            break;
        case 'No Filter':
            displayPokemon(pokemonList);
            break;
        default:
            filter(pokemonList, option);
            console.log(option)
            break;
    }

};

/* Calling functions */
abc(alphabet);
getData();

/* Event Listener */
document.getElementById('options').addEventListener('change', () => options(pokemonList));


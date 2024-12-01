const pokemonNome = document.querySelector('.pokemon_nome');
const pokemon_numero = document.querySelector('.pokemon_numero');
const pokemon_image = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

//Criei esse codigo para mostrar os 150 na tela inicial, mas tem  todas gerações
let searchPokemon = Math.floor(Math.random() * 150) + 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        console.log(data); // Para ver os dados do Pokémon
        return data;
    }
};

const renderPokemon = async (pokemon) => {
    pokemonNome.innerHTML = 'Carregando...';
    const data = await fetchPokemon(pokemon);

    if (pokemon.toLowerCase() === 'andre') {
        pokemonNome.innerHTML = 'André ';
        pokemon_numero.innerHTML = '000';
        pokemon_image.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1wb3RlOGc1N2JmMXptYWtxcDJ6MjBibmc1a2VtdHJycGNzZ2FqcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8FqWpHTJNRmysS9vRM/giphy.gif';
        input.value = '';
        return;}else if (pokemon.toLowerCase() === 'tubinho') {
            pokemonNome.innerHTML = 'Tubinho';
            pokemon_numero.innerHTML = '*001';
            pokemon_image.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTk1ZGo5bjJ4dmtyNmg0dWZ5Nnd0d2EzYWczeHRsZzd2dHc2OHFsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/oQE2woWZqUnELRSod3/giphy.gif';
            input.value = '';
            return;
        } else if (pokemon.toLowerCase() === 'profeta') {
            pokemonNome.innerHTML = 'Profeta';
            pokemon_numero.innerHTML = '*002';
            pokemon_image.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2gyNGxydjAweWF0aGQ5cjZvanZzZHNsMjI5Y2U1ejZ5dmo0Y3M3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TrsXbKNRRmX6l2K9Ms/giphy.gif';
            input.value = '';
            return;} else if (pokemon.toLowerCase() === 'matheus') {
            pokemonNome.innerHTML = 'Matheus';
            pokemon_numero.innerHTML = '*003';
            pokemon_image.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm40OHlhY3ZoZGo3OXFmajc0d3B1dW9waHZseHAwbHUxZTRsOWgxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4BrT7OEX3nXoSehoOO/giphy.gif';
            input.value = '';
                return;}

    if (data) {
        pokemonNome.innerHTML = data.name;
        pokemon_numero.innerHTML = data.id;
        pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
    } else {
        pokemonNome.innerHTML = 'Não existe';
        pokemon_image.src = ''; // Limpa a imagem se o Pokémon não existir (corrigir, esta feio)
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value);
});

// Botões de navegação
buttonPrev.addEventListener('click', () => {
    searchPokemon -= 1;
    if (searchPokemon < 1) searchPokemon = 1; // Evita IDs abaixo de 1
    renderPokemon(searchPokemon.toString()); // Converte para string na chamada
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon.toString()); // Converte para string na chamada
});

// Carrega um Pokémon inicial aleatório entre os primeiros 150
renderPokemon(searchPokemon.toString()); 

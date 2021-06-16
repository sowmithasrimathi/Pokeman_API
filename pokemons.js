const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.querySelector('.search-input'),
      searchButton = document.querySelector('.search-button'),
      container = document.querySelector('.pokemon-container');

var pokeName,pokemon,card;

function requestPokeInfo(url, name) {
    fetch(url + name)
      .then(response => response.json())
      .then(data => {
        pokemon = data;
      })
      .catch(err => console.log(err));
  }
  
  console.log(pokemon);

  function createCard () {
    card = `
      <div class="pokemon-info">
          <h1 class="name">Name: ${pokemon.name}</h1>
          <h2 class="number">No: ${pokemon.id}</h2>
          <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
          <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
          <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
          <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
      </div>`;
    return card;
  }
  
  function startApp(pokeName) {
    requestPokeInfo(baseUrl, pokeName);
  
    setTimeout(function () {
      if(pokemon.detail) {
        container.style.display = 'none';
      }else{
        container.style.display = 'flex';
        container.innerHTML = createCard();
      }
    }, 2000);
  }

  searchButton.addEventListener('click', event => {
    event.preventDefault();
    pokeName = searchInput.value.toLowerCase();
    startApp(pokeName);
  });
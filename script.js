const API_URL =" https://pokeapi.co/api/v2/pokemon?limit=20";
let allPokemons = [];

async function loadPokemons(){
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
    }catch(e) {
        console.log ('error');
    }
}
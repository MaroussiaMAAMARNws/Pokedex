async function Pokedex() {
    const response = await fetch ("https://pokeapi.co");
    const pokemon = await response.json();
    console.log (pokemon);
}
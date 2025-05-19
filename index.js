async function Pokedex() {
    const response = await fetch ("https://");
    const pokemon = await response.json();
    console.log (pokemon);
}
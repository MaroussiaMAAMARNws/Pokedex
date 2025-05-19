async function Pokedex() {
    try {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/20");
        if (!reponse.ok) throw new Error("Erreur HTTP : " + reponse.status);
        const data = await reponse.json();
        console.log(data.name);
    }
    catch (err) {
        console.error("Problème lors du chargement :", err.message);
        }
}
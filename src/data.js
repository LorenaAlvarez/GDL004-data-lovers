import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
console.log(RICKANDMORTY);

let i = 1;
for (let personaje of RICKANDMORTY.results) {
    let personajeName = personaje.name;
    console.log(personajeName);
    let personajeEspecie = personaje.species;
    console.log(personajeEspecie);
    let personajeEpisode = personaje.episode.map(v => {
        if (v.length === 41) {
            return v.slice(-1)
        } else { return v.slice(-2) }
    });
    console.log(personajeEpisode);

    if (i === 15) {
        break; // Se rompe el for
    }
    i++;


}
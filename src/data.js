import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
console.log(RICKANDMORTY);
let i = 1;
for (let personaje of RICKANDMORTY.results) {
    console.log(personaje.name);
    console.log(personaje.species);
    console.log(personaje.episode.map(v => {
        if (v.length === 41) {
            return v.slice(-1)
        } else { return v.slice(-2) }
    }));
    if (i === 15) {
        break; // Se rompe el for
    }

    i++;
}

let personaje = RICKANDMORTY.results;
const filterByNameFunction = (name) => {
    return name === Rick;
}

let filtrados = personaje.name.filter(filterByNameFunction);
console.log(filtrados);
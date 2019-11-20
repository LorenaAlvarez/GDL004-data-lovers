import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'


let i = 1;


for (let personaje of RICKANDMORTY.results) {
    const template = document.createElement('div'); // se crea un elemento html div dentro de la variable template: <div></div>
    template.classList.add('personaje') //  se agrega la clase personaje al div creado; <div class="personaje"></div>ersonaje
    template.innerHTML = '<h1>' + "Name: " + personaje.name +
        '<br>' + " Appears in episode " +
        personaje.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) + " Species: " + personaje.species + '</h1><img src="' + personaje.image + '"> ';

    document.getElementById('characterGrid').appendChild(template);

    // Mostrar solo los primeros 15
    if (i === 15) {
        break; // Se rompe el ciclo for
    }
    i++;
}
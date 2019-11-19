import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
console.log(RICKANDMORTY);

let i = 1;
for (let personaje of RICKANDMORTY.results) {
    const template = document.createElement('div'); // se crea un elemento html div dentro de la variable template: <div></div>
    template.classList.add('personaje') //  se agrega la clase personaje al div creado; <div class="personaje"></div>

    // se agrega dentro del div un h1 con el nombre del personaje y se agrega la imagen con el src de la imagen del personaje
    template.innerHTML = '<h1>' + personaje.name + '</h1><img src="'+ personaje.image +'">'; // <div class="personaje"><h1>Rick</h1><img src="rick.jpg"><img></div>
     
    document.getElementById('characterGrid').appendChild(template);

    // Mosstrar solo los primeros 15
    if (i === 15) {
        break; // Se rompe el for
    }

    i++;
}

// document.getElementById('characterGrid').innerHTML = result;

/* document.getElementById("item1").innerHTML = ("Id: " + RICKANDMORTY.results[0].id + " ") +
    ("Name: " + RICKANDMORTY.results[0].name + " ") +
    ("Status: " + RICKANDMORTY.results[0].status + " ") +
    ("Gender: " + RICKANDMORTY.results[0].gender + " ") +
    ("Appears in episodes: " + RICKANDMORTY.results[0].episode[0].slice(-1) + " ") +
    ("to " + RICKANDMORTY.results[0].episode[30].slice(-2)); */

 
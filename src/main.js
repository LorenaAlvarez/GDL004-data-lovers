import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
import {
    sortEp,
    sortGe,
    sortSp,
    sortName,
    sortID,
    manager
} from './data.js'


//FUNCIONALIDAD BOTON IR ARRIBA


function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}
var mybutton = document.getElementById('myBtn');
window.onscroll = function() { scrollFunction() };

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById('myBtn').addEventListener('click', topFunction)


//BUTTON START / hide start and show characters
document.getElementById('container').addEventListener('click', function() {
    document.getElementById('characterPage').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('startPage').style.display = 'none';
});


//FUNCION INICIAL//

for (let personaje of RICKANDMORTY.results) {
    const template = document.createElement('div');
    template.classList.add('personaje');
    template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
        '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
        personaje.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
        personaje.species + '</h4>';

    document.getElementById('characterGrid').appendChild(template);
    // Mostrar solo los primeros 15

};



//FUNCION PARA MOSTRAR POR LETRAS

let abc = document.getElementsByClassName('abc');

for (let i = 0; i < abc.length; i++) {
    abc[i].addEventListener("click", function() {
        let letraFiltro = abc[i].textContent.slice(0, 1)
        let resultados = manager.filterData({ data: RICKANDMORTY, letraFiltro: letraFiltro }, "filtroLetras");
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4>';

            document.getElementById('characterGrid').appendChild(template);
        }
    })
}



//E.TARGET ESPECIES

const filterBySpecies = (e) => {
    if (e.target !== e.currentTarget) {
        let especieSeleccionada = e.target.name;
        let species = RICKANDMORTY.results.filter((e) => e.species === especieSeleccionada);

        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of species) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4>';

            document.getElementById('characterGrid').appendChild(template);
        }
    }
};

let theParent = document.querySelector("#listaEspecies")
theParent.addEventListener("click", filterBySpecies, false);


//E.TARGET GENDER

import { filterByGender } from './data.js'


let theParentGender = document.querySelector("#listaGeneros")
theParentGender.addEventListener("click", (e) => {
    console.log(filterByGender(e))
}, false);

document.getElementById("characterGrid").innerHTML = ""

const generos = (e) => {
    return (filterByGender(e))
};
console.log(generos);

/* let generos = RICKANDMORTY.results.filter((e) => e.gender === generoSeleccionado); */

// for (let personaje of generos) {
//     const template = document.createElement('div');
//     template.classList.add('personaje');
//     template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
//         '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
//         personaje.episode.map(v => {
//             if (v.length === 41) {
//                 return v.slice(-1)
//             } else { return v.slice(-2) }
//         }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
//         personaje.species + '</h4>';

//     document.getElementById('characterGrid').appendChild(template);
// };



//E.TARGET EPISODE FIRST SEASON

const filterByEpisode = (e) => {
    if (e.target !== e.currentTarget) {
        let episodioSeleccionado = e.target.id;
        let episodios = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionado));

        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of episodios) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4>';

            document.getElementById('characterGrid').appendChild(template);
        }
    }
};

let theParentEpisode = document.querySelector("#listaEpisodiosUno")
theParentEpisode.addEventListener("click", filterByEpisode, false);

//E.TARGET EPISODE SECOND SEASON

const filterByEpisodeSecond = (e) => {
    if (e.target !== e.currentTarget) {
        let episodioSeleccionadoDos = e.target.id;
        let episodiosDos = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionadoDos));

        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of episodiosDos) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4>';

            document.getElementById('characterGrid').appendChild(template);
        }
    }
};

let theParentEpisodeTwo = document.querySelector("#listaEpisodiosDos")
theParentEpisodeTwo.addEventListener("click", filterByEpisodeSecond, false);

//E.TARGET EPISODE THIRD SEASON

const filterByEpisodeThird = (e) => {
    if (e.target !== e.currentTarget) {
        let episodioSeleccionadoTres = e.target.id;
        let episodiosTres = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionadoTres));

        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of episodiosTres) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4>';

            document.getElementById('characterGrid').appendChild(template);
        }
    }
};

let theParentEpisodeThree = document.querySelector("#listaEpisodiosTres")
theParentEpisodeThree.addEventListener("click", filterByEpisodeThird, false);




//FUNCTION SORT BY NAME!!

document.getElementById("sortName").addEventListener("click", function() {
    let resultados = (sortName);
    document.getElementById("characterGrid").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4>';

        document.getElementById('characterGrid').appendChild(template);
    }
})

//FUNCTION SORT BY SPECIES!!

document.getElementById("sortSpe").addEventListener("click", function() {
    let resultados = (sortSp);
    document.getElementById("characterGrid").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4>';

        document.getElementById('characterGrid').appendChild(template);
    }
})

//FUNCTION SORT BY GENDER!!

document.getElementById("sortGend").addEventListener("click", function() {
    let resultados = (sortGe);
    document.getElementById("characterGrid").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4>';

        document.getElementById('characterGrid').appendChild(template);
    }
})



//FUNCTION SORT BY ID!!

document.getElementById("sortID").addEventListener("click", function() {
    let resultados = (sortID);
    document.getElementById("characterGrid").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<img src="' + personaje.image + '"><h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode: " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4>';

        document.getElementById('characterGrid').appendChild(template);
    }
})


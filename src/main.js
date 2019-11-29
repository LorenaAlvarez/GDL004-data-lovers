import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
import {
    sortEp,
    sortGe,
    sortSp,
    sortName,
    sortID,
    manager,
    filterBySpecies,
    filterByGender,
    filterByEpisode,
    filterByEpisodeSecond,
    filterByEpisodeThird
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

};



//FUNCION PARA MOSTRAR POR LETRAS

let abc = document.getElementsByClassName('abc');

for (let i = 0; i < abc.length; i++) {
    abc[i].addEventListener("click", function() {
        let letraFiltro = abc[i].textContent.slice(0, 1)
        let resultados = manager.filterData({ data: RICKANDMORTY, letraFiltro: letraFiltro }, "filtroLetras");

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

let species = [];

let theParentSp = document.querySelector("#listaEspecies")
theParentSp.addEventListener("click", (e) => {
    species = filterBySpecies(e.target.name)

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
    };

}, false);


//E.TARGET GENDER
let generos = [];

let theParentGender = document.querySelector("#listaGeneros")
theParentGender.addEventListener("click", (e) => {
    generos = filterByGender(e.target.id)

    document.getElementById("characterGrid").innerHTML = ""

    for (let personaje of generos) {
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
    };

}, false);




//E.TARGET EPISODE FIRST SEASON
let episodios = [];

let theParentEpOne = document.querySelector("#listaEpisodiosUno")
theParentEpOne.addEventListener("click", (e) => {
    episodios = filterByEpisode(e.target.id)

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
    };

}, false);

//E.TARGET EPISODE SECOND SEASON
let episodiosDos = [];

let theParentEpTwo = document.querySelector("#listaEpisodiosDos")
theParentEpTwo.addEventListener("click", (e) => {
    episodiosDos = filterByEpisodeSecond(e.target.id)

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
    };


}, false);

//E.TARGET EPISODE THIRD SEASON
let episodiosTres = [];

let theParentEpTres = document.querySelector("#listaEpisodiosTres")
theParentEpTres.addEventListener("click", (e) => {
    episodiosTres = filterByEpisodeThird(e.target.id)

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
    };


}, false);



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


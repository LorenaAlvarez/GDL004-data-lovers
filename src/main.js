import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
import {
    females,
    males,
    unks,
    episode1,
    sortEp,
    sortGe,
    sortSp,
    sortName,
    sortID
} from './data.js'


//FUNCIONALIDAD BOTON IR ARRIBA

var mybutton = document.getElementById("myBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById("myBtn").addEventListener("click", topFunction)


//BUTTON START / hide start and show characters
document.getElementById("container").addEventListener("click", function() {
    document.getElementById("characterPage").style.display = "block"
    document.getElementById("buttons").style.display = "block"
    document.getElementById("startPage").style.display = "none"
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
        let especieSeleccionada = e.target.id;
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

const filterByGender = (e) => {
    if (e.target !== e.currentTarget) {
        let generoSeleccionado = e.target.id;
        let generos = RICKANDMORTY.results.filter((e) => e.gender === generoSeleccionado);

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
        }
    }
};

let theParentGender = document.querySelector("#listaGeneros")
theParentGender.addEventListener("click", filterByGender, false);

//FUNCTION FILTER BY EPISODE -- EP1!!

// Con esta función, logro que aparezcan los personajes que exclusiva y unicamente aparecen en el episodio 1, si el personaje 
// aparece en varios capitulos además del 1, no lo muestra.

document.getElementById("https://rickandmortyapi.com/api/episode/1").addEventListener("click", function() {
    let resultados = (episode1);
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
import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
import {
    humans,
    aliens,
    humanoids,
    unknowns,
    poopys,
    mythologs,
    animals,
    vampires,
    robots,
    cronenbergs,
    diseases,
    parasites,
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


//FUNCIONALIDADES DE MOSTRAR OCULTAR

//BUTTON START / hide start and show characters
document.getElementById("container").addEventListener("click", function() {
    document.getElementById("characterPage").style.display = "block"
    document.getElementById("buttons").style.display = "block"
    document.getElementById("startPage").style.display = "none"
});



//FUNCION INICIAL DE MOSTRAR SOLO 15 PERSONAJES//
let i = 1;
for (let personaje of RICKANDMORTY.results) {
    const template = document.createElement('div');
    template.classList.add('personaje');
    template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
        '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
        personaje.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
        personaje.species + '</h4><img src="' + personaje.image + '"> ';

    document.getElementById('gridItem').appendChild(template);
    // Mostrar solo los primeros 15
    if (i === 15) {
        break; // Se rompe el ciclo for
    }
    i++;
};




//SHOW ALL
const showAll = () => {
    for (let personaje of RICKANDMORTY.results) {
        const template = document.createElement('div');
        template.classList.add('personaje');
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
};
document.getElementById("D").addEventListener("click", showAll);





//FUNCION PARA MOSTRAR POR LETRAS

let abc = document.getElementsByClassName('abc');

for (let i = 0; i < abc.length; i++) {
    abc[i].addEventListener("click", function() {
        let letraFiltro = abc[i].textContent.slice(0, 1)
        let resultados = manager.filterData({ data: RICKANDMORTY, letraFiltro: letraFiltro }, "filtroLetras");
        /* debugger */
        document.getElementById("gridItem").innerHTML = ""

        for (let personaje of resultados) {
            const template = document.createElement('div');
            template.classList.add('personaje');
            template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
                '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
                personaje.episode.map(v => {
                    if (v.length === 41) {
                        return v.slice(-1)
                    } else { return v.slice(-2) }
                }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
                personaje.species + '</h4><img src="' + personaje.image + '"> ';

            document.getElementById('gridItem').appendChild(template);
        }
    })
}




//FUNCTION FILTER BY SPECIES -- ALIENS!!

document.getElementById("aliens").addEventListener("click", function() {
    let resultados = (aliens);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje');
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})


//FUNCTION FILTER BY SPECIES -- ANIMALS!!

document.getElementById("animals").addEventListener("click", function() {
    let resultados = (animals);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- CRONENBERGS!!

document.getElementById("cronenbergs").addEventListener("click", function() {
    let resultados = (cronenbergs);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- DISEASES!!

document.getElementById("diseases").addEventListener("click", function() {
    let resultados = (diseases);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- HUMANS!!

document.getElementById("human").addEventListener("click", function() {
    let resultados = (humans);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- HUMANOIDS!!

document.getElementById("humanoids").addEventListener("click", function() {
    let resultados = (humanoids);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- MYTHOLOGS!!

document.getElementById("mythologs").addEventListener("click", function() {
    let resultados = (mythologs);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- PARASITES!!

document.getElementById("parasites").addEventListener("click", function() {
    let resultados = (parasites);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- POOPYBUTTHOLES!!

document.getElementById("poopys").addEventListener("click", function() {
    let resultados = (poopys);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- ROBOTS!!

document.getElementById("robots").addEventListener("click", function() {
    let resultados = (robots);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- UNKNOWN!!

document.getElementById("unknowns").addEventListener("click", function() {
    let resultados = (unknowns);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY SPECIES -- VAMPIRES!!

document.getElementById("vampires").addEventListener("click", function() {
    let resultados = (vampires);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY GENDER -- FEMALES!!

document.getElementById("females").addEventListener("click", function() {
    let resultados = (females);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY GENDER -- MALES!!

document.getElementById("males").addEventListener("click", function() {
    let resultados = (males);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY GENDER -- UNKNOWN!!

document.getElementById("unks").addEventListener("click", function() {
    let resultados = (unks);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION FILTER BY EPISODE -- EP1!!

// Con esta función, logro que aparezcan los personajes que exclusiva y unicamente aparecen en el episodio 1, si el personaje 
// aparece en varios capitulos además del 1, no lo muestra.

document.getElementById("ep1").addEventListener("click", function() {
    let resultados = (episode1);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION SORT BY NAME!!

document.getElementById("sortName").addEventListener("click", function() {
    let resultados = (sortName);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION SORT BY SPECIES!!

document.getElementById("sortSpe").addEventListener("click", function() {
    let resultados = (sortSp);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION SORT BY GENDER!!

document.getElementById("sortGend").addEventListener("click", function() {
    let resultados = (sortGe);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION SORT BY EPISODE!!

document.getElementById("sortEp").addEventListener("click", function() {
    let resultados = (sortEp);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})

//FUNCTION SORT BY ID!!

document.getElementById("sortID").addEventListener("click", function() {
    let resultados = (sortID);
    document.getElementById("gridItem").innerHTML = ""

    for (let personaje of resultados) {
        const template = document.createElement('div');
        template.classList.add('personaje')
        template.innerHTML = '<h1>' + "Name: " + '<br>' + personaje.name +
            '</h1>' + '<h2>' + " Appears in episode " + '</h2>' + '<h5>' +
            personaje.episode.map(v => {
                if (v.length === 41) {
                    return v.slice(-1)
                } else { return v.slice(-2) }
            }) + '</h5>' + '<h3>' + "Gender: " + '<br>' + personaje.gender + '</h3>' + '<h4>' + " Species: " + '<br>' +
            personaje.species + '</h4><img src="' + personaje.image + '"> ';

        document.getElementById('gridItem').appendChild(template);
    }
})
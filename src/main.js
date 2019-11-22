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
    parasites
} from './data.js'

//To show search bar
document.getElementById("searchBar").style.display = "none";
document.getElementById("searchBtn").addEventListener("click", function() {
    document.getElementById("searchBar").style.display = "block";
});



//SHOW ALL
const showAll = () => {
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

    }
};
document.getElementById("showAll").addEventListener("click", showAll);



//BUTTON START / hide start and show characters
document.getElementById("container").addEventListener("click", function() {
    document.getElementById("characterPage").style.display = "block"
    document.getElementById("buttons").style.display = "block"
    document.getElementById("startPage").style.display = "none"
});



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
        }
    })
}


//FUNCTION FILTER BY SPECIES -- HUMANS!!

let spHum = document.getElementsByClassName('specie');

for (let i = 0; i < spHum.length; i++) {
    spHum[i].addEventListener("click", function() {
        let letraFiltro = spHum[i].textContent.slice(0, 1)
        let resultados = (humans);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}
//FUNCTION FILTER BY SPECIES -- ALIENS!!
let spAl = document.getElementsByClassName('specie');

for (let i = 0; i < spAl.length; i++) {
    spAl[i].addEventListener("click", function() {
        let letraFiltro = spAl[i].textContent.slice(0, 1)
        let resultados = (aliens);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- HUMANOID!!
let spHuma = document.getElementsByClassName('specie');

for (let i = 0; i < spHuma.length; i++) {
    spHuma[i].addEventListener("click", function() {
        let letraFiltro = spHuma[i].textContent.slice(0, 1)
        let resultados = (humanoids);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- UNKNOWN!!
let spUnk = document.getElementsByClassName('specie');

for (let i = 0; i < spUnk.length; i++) {
    spUnk[i].addEventListener("click", function() {
        let letraFiltro = spUnk[i].textContent.slice(0, 1)
        let resultados = (unknowns);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- PoopyButtHoles!!
let spPoop = document.getElementsByClassName('specie');

for (let i = 0; i < spPoop.length; i++) {
    spPoop[i].addEventListener("click", function() {
        let letraFiltro = spPoop[i].textContent.slice(0, 1)
        let resultados = (poopys);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Mythologs!!
let spMyt = document.getElementsByClassName('specie');

for (let i = 0; i < spMyt.length; i++) {
    spMyt[i].addEventListener("click", function() {
        let letraFiltro = spMyt[i].textContent.slice(0, 1)
        let resultados = (mythologs);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Animals!!
let spAn = document.getElementsByClassName('specie');

for (let i = 0; i < spAn.length; i++) {
    spAn[i].addEventListener("click", function() {
        let letraFiltro = spAn[i].textContent.slice(0, 1)
        let resultados = (animals);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Vampires!!
let spVam = document.getElementsByClassName('specie');

for (let i = 0; i < spVam.length; i++) {
    spVam[i].addEventListener("click", function() {
        let letraFiltro = spVam[i].textContent.slice(0, 1)
        let resultados = (vampires);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Robots!!
let spRob = document.getElementsByClassName('specie');

for (let i = 0; i < spRob.length; i++) {
    spRob[i].addEventListener("click", function() {
        let letraFiltro = spRob[i].textContent.slice(0, 1)
        let resultados = (robots);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Cronenbergs!!
let spCron = document.getElementsByClassName('specie');

for (let i = 0; i < spCron.length; i++) {
    spCron[i].addEventListener("click", function() {
        let letraFiltro = spCron[i].textContent.slice(0, 1)
        let resultados = (cronenbergs);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Diseases!!
let spDis = document.getElementsByClassName('specie');

for (let i = 0; i < spDis.length; i++) {
    spDis[i].addEventListener("click", function() {
        let letraFiltro = spDis[i].textContent.slice(0, 1)
        let resultados = (diseases);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}

//FUNCTION FILTER BY SPECIES -- Parasites!!
let spPar = document.getElementsByClassName('specie');

for (let i = 0; i < spPar.length; i++) {
    spPar[i].addEventListener("click", function() {
        let letraFiltro = spPar[i].textContent.slice(0, 1)
        let resultados = (parasites);
        /* debugger */
        document.getElementById("characterGrid").innerHTML = ""

        for (let personaje of resultados) {
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
        }
    })
}
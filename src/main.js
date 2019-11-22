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
    unks
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
document.getElementById("D").addEventListener("click", showAll);



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




//FUNCTION FILTER BY SPECIES -- ALIENS!!

document.getElementById("aliens").addEventListener("click", function() {
    let resultados = (aliens);
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


//FUNCTION FILTER BY SPECIES -- ANIMALS!!

document.getElementById("animals").addEventListener("click", function() {
    let resultados = (animals);
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

//FUNCTION FILTER BY SPECIES -- CRONENBERGS!!

document.getElementById("cronenbergs").addEventListener("click", function() {
    let resultados = (cronenbergs);
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

//FUNCTION FILTER BY SPECIES -- DISEASES!!

document.getElementById("diseases").addEventListener("click", function() {
    let resultados = (diseases);
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

//FUNCTION FILTER BY SPECIES -- HUMANS!!

document.getElementById("human").addEventListener("click", function() {
    let resultados = (humans);
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

//FUNCTION FILTER BY SPECIES -- HUMANOIDS!!

document.getElementById("humanoids").addEventListener("click", function() {
    let resultados = (humanoids);
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

//FUNCTION FILTER BY SPECIES -- MYTHOLOGS!!

document.getElementById("mythologs").addEventListener("click", function() {
    let resultados = (mythologs);
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

//FUNCTION FILTER BY SPECIES -- PARASITES!!

document.getElementById("parasites").addEventListener("click", function() {
    let resultados = (parasites);
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

//FUNCTION FILTER BY SPECIES -- POOPYBUTTHOLES!!

document.getElementById("poopys").addEventListener("click", function() {
    let resultados = (poopys);
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

//FUNCTION FILTER BY SPECIES -- ROBOTS!!

document.getElementById("robots").addEventListener("click", function() {
    let resultados = (robots);
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

//FUNCTION FILTER BY SPECIES -- UNKNOWN!!

document.getElementById("unknowns").addEventListener("click", function() {
    let resultados = (unknowns);
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

//FUNCTION FILTER BY SPECIES -- VAMPIRES!!

document.getElementById("vampires").addEventListener("click", function() {
    let resultados = (vampires);
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

//FUNCTION FILTER BY GENDER -- FEMALES!!

document.getElementById("females").addEventListener("click", function() {
    let resultados = (females);
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
            }) + " Gender: " + personaje.gender + " Species: " + personaje.species + '</h1><img src="' + personaje.image + '"> ';

        document.getElementById('characterGrid').appendChild(template);
    }
})

//FUNCTION FILTER BY GENDER -- MALES!!

document.getElementById("males").addEventListener("click", function() {
    let resultados = (males);
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
            }) + " Gender: " + personaje.gender + " Species: " + personaje.species + '</h1><img src="' + personaje.image + '"> ';

        document.getElementById('characterGrid').appendChild(template);
    }
})

//FUNCTION FILTER BY GENDER -- UNKNOWN!!

document.getElementById("unks").addEventListener("click", function() {
    let resultados = (unks);
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
            }) + " Gender: " + personaje.gender + " Species: " + personaje.species + '</h1><img src="' + personaje.image + '"> ';

        document.getElementById('characterGrid').appendChild(template);
    }
})
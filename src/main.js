import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'

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
        template.innerHTML = '<h1>' + personaje.name + '</h1><img src="' + personaje.image + '"> ';

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

//BUTTON A
document.getElementById("A").addEventListener("click", function() {
    document.getElementById("characterPage").innerHTML = "";
    document.getElementById("filteredPage").style.display = "block";
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

      let abc = document.getElementsByClassName('abc'); 

      /* for (let boton of abc) {
          boton.addEventListener ("click", manager.filterData(RICKANDMORTY,"filtroLetras"))
      } */
      
      for (let i=0; i < abc.length; i++){
            abc[i].addEventListener ("click", function(){
                let letraFiltro = abc[i].textContent.slice(0,1)
            let resultados = manager.filterData({data: RICKANDMORTY,letraFiltro: letraFiltro},"filtroLetras");
            /* debugger */
            document.getElementById("characterGrid").innerHTML="" 
            
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

//CREATE GRID FOR FILTERED RESULTS

/* for (let personajeFiltrado of RICKANDMORTY.results) {
    const templateFilt = document.createElement('div'); 
    templateFilt.classList.add('personajeFiltrado') 
    templateFilt.innerHTML = '<h1>' + "Name: " + personajeFiltrado.name +
        '<br>' + " Appears in episode " +
        personajeFiltrado.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) + " Species: " + personajeFiltrado.species + '</h1><img src="' + personajeFiltrado.image + '"> ';

    document.getElementById('filteredCharacterGrid').appendChild(templateFilt);


} */

//CREATE GRID FOR SORTERED RESULTS

/* for (let personajeSorteado of RICKANDMORTY.results) {
    const templateSort = document.createElement('div'); 
    templateSort.classList.add('personajeSorteado') 
    templateSort.innerHTML = '<h1>' + "Name: " + personajeSorteado.name +
        '<br>' + " Appears in episode " +
        personajeSorteado.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) + " Species: " + personajeSorteado.species + '</h1><img src="' + personajeSorteado.image + '"> ';

    document.getElementById('sortedCharacterGrid').appendChild(templateSort);


} */
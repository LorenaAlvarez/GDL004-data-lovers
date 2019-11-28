import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'


//FUNCION PARA FILTRAR POR LETRAS
window.manager = {
    filterData(data, condition) {
        if (condition === "filtroLetras") {
            let result = data.data.results.filter(character => {
                let letraFiltro = character.name.slice(0, 1)
                return letraFiltro === data.letraFiltro.toUpperCase()
            });
            return result
        }
    }
}


//FILTER SPECIES -- AQUI DEBE IR EL CODIGO DE LA FUNCIONALIDAD

const filterByGender = (e) => {
    if (e.target !== e.currentTarget) {
        let generoSeleccionado = e.target.id;
        let generos = RICKANDMORTY.results.filter((e) => e.gender === generoSeleccionado);
        return generos;
    }
};

export { filterByGender };



//FILTER GENDER



//FILTER EPISODE SEASON 1


//FILTER EPISODE SEASON 2


//FILTER EPISODE SEASON 3



//SORT BY NAME
let arr = RICKANDMORTY.results;
const sortName = Array.from(arr).sort((a, b) => { if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 });


//SORT BY SPECIES
const sortSp = Array.from(arr).sort((a, b) => { if (a.species.toLowerCase() < b.species.toLowerCase()) return -1 });


//SORT BY GENDER
const sortGe = Array.from(arr).sort((a, b) => { if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1 });

//SORT BY ID
const sortID = Array.from(arr).sort((a, b) => { if (a.id < b.id) return -1 });

//SORT BY EPISODE
const sortEp = Array.from(arr).sort((a, b) => {
    if (a.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        }) < b.episode.map(v => {
            if (v.length === 41) {
                return v.slice(-1)
            } else { return v.slice(-2) }
        })) return -1
});


export {
    sortName,
    sortGe,
    sortSp,
    sortEp,
    sortID
}
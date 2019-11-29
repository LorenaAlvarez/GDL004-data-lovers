import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'


//FUNCION PARA FILTRAR POR LETRAS
let manager = {
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

//FILTER SPECIES 

const filterBySpecies = (especieSeleccionada) => {
    let species = RICKANDMORTY.results.filter((e) => e.species === especieSeleccionada)
    return species

};

//FILTER GENDER
const filterByGender = (generoSeleccionado) => {
    let generos = RICKANDMORTY.results.filter((e) => e.gender === generoSeleccionado)
    return generos
};


//FILTER EPISODE SEASON 1
const filterByEpisode = (episodioSeleccionado) => {
    let episodios = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionado));
    return episodios
};

//FILTER EPISODE SEASON 2
const filterByEpisodeSecond = (episodioSeleccionadoDos) => {
    let episodiosDos = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionadoDos));
    return episodiosDos

};

//FILTER EPISODE SEASON 3
const filterByEpisodeThird = (episodioSeleccionadoTres) => {
    let episodiosTres = RICKANDMORTY.results.filter((e) => e.episode.includes(episodioSeleccionadoTres));
    return episodiosTres
};

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
    sortID,
    manager,
    filterBySpecies,
    filterByGender,
    filterByEpisode,
    filterByEpisodeSecond,
    filterByEpisodeThird
}
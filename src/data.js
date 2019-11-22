import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'

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


//FILTER
const humans = RICKANDMORTY.results.filter((human) => human.species === "Human");
console.log(humans);

//SORT BY NAME
/* let arr = RICKANDMORTY.results;
const sortName = Array.from(arr).sort((a, b) => { if (a.name.toLowerCase() < b.name.toLowerCase()) return -1 });
console.log(sortName);


//SORT BY SPECIES
const sortSp = Array.from(arr).sort((a, b) => { if (a.species.toLowerCase() < b.species.toLowerCase()) return -1 });
console.log(sortSp);

//SORT BY GENDER
const sortGe = Array.from(arr).sort((a, b) => { if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1 });
console.log(sortGe);

//SORT BY EPISODE
/* const sortEp = Array.from(arr).sort((a, b) => {
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
console.log(sortEp); 






*/
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


//FILTER SPECIES
const humans = RICKANDMORTY.results.filter((human) => human.species === "Human");
const aliens = RICKANDMORTY.results.filter((alien) => alien.species === "Alien");
const humanoids = RICKANDMORTY.results.filter((humanoid) => humanoid.species === "Humanoid");
const unknowns = RICKANDMORTY.results.filter((unknown) => unknown.species === "unknown");
const poopys = RICKANDMORTY.results.filter((poopy) => poopy.species === "Poopybutthole");
const mythologs = RICKANDMORTY.results.filter((mytholog) => mytholog.species === "Mytholog");
const animals = RICKANDMORTY.results.filter((animal) => animal.species === "Animal");
const vampires = RICKANDMORTY.results.filter((vampire) => vampire.species === "Vampire");
const robots = RICKANDMORTY.results.filter((robot) => robot.species === "Robot");
const cronenbergs = RICKANDMORTY.results.filter((cronenberg) => cronenberg.species === "Cronenberg");
const diseases = RICKANDMORTY.results.filter((disease) => disease.species === "Disease");
const parasites = RICKANDMORTY.results.filter((parasite) => parasite.species === "Parasite");
//FILTER GENDER

const females = RICKANDMORTY.results.filter((female) => female.gender === "Female");
const males = RICKANDMORTY.results.filter((male) => male.gender === "Male");
const unks = RICKANDMORTY.results.filter((unk) => unk.gender === "unknown");

export {
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
}

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
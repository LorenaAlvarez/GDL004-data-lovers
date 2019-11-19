import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
console.log(RICKANDMORTY);


let arrEpisodes = RICKANDMORTY.results[0].episode;
const episode = new Array(arrEpisodes.length)
const episode2 = new Array(arrEpisodes.length)

for (let i = 0; i < 9; i++) {
    episode[i] = arrEpisodes[i].slice(-1)
}
for (let i = 9; i < arrEpisodes.length; i++) {
    episode2[i] = arrEpisodes[i].slice(-2)
}

document.getElementById("item1").innerHTML = ("Id: " + RICKANDMORTY.results[0].id + " ") +
    ("Name: " + RICKANDMORTY.results[0].name + " ") +
    ("Status: " + RICKANDMORTY.results[0].status + " ") +
    ("Gender: " + RICKANDMORTY.results[0].gender + " ") +
    ("Appears in episodes: " + episode + episode2);
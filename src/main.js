import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
console.log(RICKANDMORTY);


document.getElementById("item1").innerHTML = ("Id: " + RICKANDMORTY.results[0].id + " ") +
    ("Name: " + RICKANDMORTY.results[0].name + " ") +
    ("Status: " + RICKANDMORTY.results[0].status + " ") +
    ("Gender: " + RICKANDMORTY.results[0].gender + " ") +
    ("Appears in episodes: " + RICKANDMORTY.results[0].episode[0].slice(-1) + " ") +
    ("to " + RICKANDMORTY.results[0].episode[30].slice(-2));
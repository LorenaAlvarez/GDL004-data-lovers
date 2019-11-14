import RICKANDMORTY from './data/rickandmorty/rickandmorty.js'
import { example } from './data.js';
console.log(example);
console.log(RICKANDMORTY);


document.getElementById("strtBtn").addEventListener("click", nextPage);

const nextPage = () => {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("characterPage").style.display = "block";
}
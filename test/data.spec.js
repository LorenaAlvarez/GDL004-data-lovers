import { manager, filterByGender, filterBySpecies, filterByEpisode, filterByEpisodeSecond, filterByEpisodeThird } from "../src/data";
import RICKANDMORTY from '../src/data/rickandmorty/rickandmorty.js'

describe('manager', () => {

    it('debería ser un objeto', () => {

        expect(typeof manager).toBe('object');
    });

    it('debería retornar el filtroLetras con A', () => {

        let response = manager.filterData({ data: RICKANDMORTY, letraFiltro: 'A' }, "filtroLetras"); // response contendrá el array de objetos que devuelve manager.filterData [{}, {}, {}]
        expect(response[0].name).toBe('Abadango Cluster Princess')
    });

});

describe('Femeninos', () => {
    let generoSeleccionadoFem = "Female"
    let response = filterByGender(generoSeleccionadoFem)

    it('debería retornar el filtro de genero femenino', () => {
        expect(response[0].name).toBe('Summer Smith')
    });

});

describe('Masculinos', () => {
    let generoSeleccionadoMale = "Male"
    let response = filterByGender(generoSeleccionadoMale)

    it('debería retornar el filtro de genero masculino', () => {
        expect(response[0].name).toBe('Rick Sanchez')
    });

});

describe('Unknown', () => {
    let generoSeleccionado = "unknown"
    let response = filterByGender(generoSeleccionado)

    it('debería retornar el filtro de genero desconocido', () => {
        expect(response[0].name).toBe('Alien Googah')
    });

});

describe('Especies', () => {
    let especieSeleccionada = "Alien"
    let response = filterBySpecies(especieSeleccionada)

    it('debería retornar el filtro de especie Alien', () => {
        expect(response[0].name).toBe('Abadango Cluster Princess')
    });

});

describe('Episodios Temp 1', () => {
    let episodioSeleccionado = "https://rickandmortyapi.com/api/episode/27"
    let response = filterByEpisodeThird(episodioSeleccionado)

    it('debería retornar el personaje numero 6 del episodio 27', () => {
        expect(response[5].name).toBe('Father Bob')
    });

});
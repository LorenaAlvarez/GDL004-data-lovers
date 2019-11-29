import { manager, females, males, unknown } from "../src/data";
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

describe('females', () => {

  it('debería retornar el filtro de genero femenino', () => {
    expect(females[0].name).toBe('Summer Smith')
  });

});

describe('males', () => {

  it('debería retornar el filtro de genero masculino', () => {
    expect(males[0].name).toBe('Rick Sanchez')
  });

});

describe('unknown', () => {

  it('debería retornar el filtro de genero desconocido', () => {
    expect(unknown[0].name).toBe('Alien Googah')
  });

});
/* eslint-disable*/

// Tipos Básicos (ocorre inferência de tipos)
let nome: string = 'Jei' // Qualquer tipo de string: '', "", ``
let idade: number = 10 //109, 1.57, -5.5, 0xF00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('Qualquer-symbol'); // symbol
// let big: bigint = 10n // bigint

// Arrays
let arrayDeNumbers: Array<number> = [1, 2, 3, 4];
let arrayDeNumbers2: number[] = [1, 2, 3, 4];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'AaaA'
}

// Funções
function soma(x: number, y: number) : number {
 return x + y
}

const soma2: (x: number, y: number) => number


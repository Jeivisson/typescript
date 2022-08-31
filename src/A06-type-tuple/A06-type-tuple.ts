// Tuple
const dadosCliente: [number, string] = [1, 'A'];
const dadosCliente2: [number, string, string] = [1, 'A', 'D'];
const dadosCliente3: [number, string, string?] = [1, 'A'];
const dadosCliente4: [number, string, ...string[]] = [1, 'A', 'Z'];

dadosCliente[0] = 100;
dadosCliente[1] = 'C';
dadosCliente.pop();

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['A', 'B'];
const array2: ReadonlyArray<string> = ['A', 'B'];

console.log(array1);
console.log(array2);

const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  readonly chaveD: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
  chaveD: 'Valor D',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave';
// objetoA.chaveD = 'Outro chave';

console.log(objetoA);

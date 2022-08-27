// Desafio 11
function generatePhoneNumber(array) {
  let telefone = '(xx) xxxxx-xxxx';
  let conta = 0;

  if (array.length > 11 || array.length < 10) {
    return 'Array com tamanho incorreto.';
  }
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9) {
        return'não é possível gerar um número de telefone com esses valores';
      }
      for (let index2 = 0; index2 < array.length; index2 += 1) {
        if (array[index] === array[index2]) {
         conta = conta + 1;
        }
        if (conta === 3) {
          return'não é possível gerar um número de telefone com esses valores';
        }
        // for (let index3 = 0; index3 < telefone.length; index3 += 1) {
        //   if(telefone[index3] === 'x') {
        //     array[index] = telefone[index3];
        //   }
        // }
      }
      conta = 0;
    }

    //return telefone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

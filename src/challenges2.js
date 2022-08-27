// Desafio 11
function generatePhoneNumber(array) {
  let telefone = '(xx) xxxxx-xxxx';
  let conta = 0;
  let contaTel = -1;

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
      }
      conta = 0;
    }
  for (let index3 = 0; index3 < telefone.length; index3 += 1) {
     if(telefone[index3] === 'x') {
      contaTel = contaTel + 1,  telefone = telefone.replace(telefone[index3], array[contaTel]);}
  }

    return telefone;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC &&
    lineB < lineA + lineC &&
    lineC < lineA + lineB &&
    lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) &&
    lineC > Math.abs(lineA - lineB)
    ) { return true; }
  return false;
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

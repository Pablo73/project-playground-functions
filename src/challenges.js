// Desafio 1
function compareTrue(element1, element2) {
  return element1 && element2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2;
}

// Desafio 3
function splitSentence(string) {
  return  string.split(' ');
}

// Desafio 4
function concatName(array) {
  let joined = array[array.length - 1] + ', ' + array[0];
  return joined;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties *1;
}

// Desafio 6
function highestCount(number) {
  let maior = number[0];
  let conta = 0;
    for (let index = 0 ; index < number.length ; index += 1){
      if(maior < number[index]){
        maior = number[index]; 
      }
    }
    for (let index2 = 0 ; index2 < number.length ; index2 += 1){
      if(maior === number[index2]){
        conta = conta + 1;
      }
    }
  return conta;
}  

// Desafio 7
function catAndMouse(string, string1, string2) {
  let distanceCat1 = Math.abs(string1 - string);
  let distanceCat2 = Math.abs(string2 - string);

  if(distanceCat1 > distanceCat2){
    return 'cat2'
  } else if(
    distanceCat1 < distanceCat2){
    return 'cat1'
  }
 return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  
 for(let index = 0 ; index < array.length ; index += 1){
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      fizzBuzz.push('fizzBuzz');

    } else if(array[index] % 5 === 0){
      fizzBuzz.push('buzz'); 

    } else if(array[index] % 3 === 0){
      fizzBuzz.push('fizz');

    } else if(array[index] % 3 != 0 && array[index] % 5 != 0){
      fizzBuzz.push('bug!');
    }
 }
 return fizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

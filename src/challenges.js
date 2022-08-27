// Desafio 1
function compareTrue(element1, element2) {
  return element1 && element2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(number) {
  let maior = number[0];
  let conta = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (maior < number[index]) {
      maior = number[index];
    }
  }
  for (let index2 = 0; index2 < number.length; index2 += 1) {
    if (maior === number[index2]) {
      conta += 1;
    }
  }
  return conta;
}

// Desafio 7
function catAndMouse(string, string1, string2) {
  let distanceCat1 = Math.abs(string1 - string);
  let distanceCat2 = Math.abs(string2 - string);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let which = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      which.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      which.push('buzz');
    } else if (array[index] % 3 === 0) {
      which.push('fizz');
    } else { which.push('bug!'); }
  }
  return which;
}

// Desafio 9
function encode(phrase) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < phrase.length; index += 1) {
    for (let index2 = 0; index2 < phrase.length; index2 += 1) {
      if (code[index] === phrase[index2]) {
        phrase = phrase.replace(phrase[index2], index + 1);
      }
    }
  }
  return phrase;
}
function decode(decPhrase) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < decPhrase.length; index += 1) {
    for (let index2 = 0; index2 < code.length + 1; index2 += 1) {
      if (decPhrase[index] == index2 && index2 != ' ') {
        decPhrase = decPhrase.replace(decPhrase[index], code[index2 - 1]);
      }
    }
  }
  return decPhrase;
}

// Desafio 10
function techList(array, string) {
  array = array.sort();
  let objet = [];
  if (array.length === 0) {
    objet = 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let itens = {};
    itens['name'] = string;
    itens['tech'] = array[index];
    objet.push(itens);
  }
  return objet;
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

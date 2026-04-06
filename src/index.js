function capitalize(string) {
  if (typeof string === 'string') {
    if (string !== '') {
      return string.slice(0, 1).toUpperCase() + string.slice(1);
    } else {
      throw new Error('String must not be empty');
    }
  } else {
    if (string === undefined) {
      throw new TypeError('You need to give an argument!');
    }
    throw new TypeError('You need to give a string!');
  }
}
function reverseString(string) {
  let array = [];
  for (let i = string.length; i >= 0; i--) {
    array.push(string.slice(i - 1, i));
  }
  return array.join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

function caesarCipher(string, shift) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string.slice(i, i + 1);
    if (letter.match(/[\p{P}\p{S}\s]/u)) {
      array.push(letter);
    } else {
      let charSetLimit;
      if (letter.toUpperCase() === letter) {
        charSetLimit = 90;
      } else {
        charSetLimit = 122;
      }
      let letterNum = letter.charCodeAt(0);
      letterNum += shift;
      while (letterNum >= charSetLimit) {
        letterNum -= 26;
      }

      array.push(String.fromCharCode(letterNum));
    }
  }
  return array.join('');
}

function analyzeArray(array) {
  array.sort();
  const length = array.length;
  return {
    min: array[0],
    max: array[length - 1],
    length: length,
    average: +(array.reduce((total, value) => total + value) / length).toFixed(2),
  };
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

const assert = require('assert').strict;

function select(array, condition) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (condition(array[i])) {
        result.push(array[i]);
      }
    }
  
    return result;
  }
  
  function isPair(value) { return value % 2 === 0 }
  function gt15(value) { return value > 15 }
  function none(value) { return true }

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, isPair), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])

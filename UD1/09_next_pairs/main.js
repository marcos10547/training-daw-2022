const assert = require('assert').strict;

function nextPairs(value) {
    if (value % 2 === 1 ) {
        return [value-1, value+1]
    } else {
        result = [ value-2, value-2]
    }
    return result
}

console.log("Todo llega")

assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])
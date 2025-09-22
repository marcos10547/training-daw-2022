const Value = require('node-less/lib/value');

const assert = require('assert').strict;

function abs(value) {
if (value < 0) {
    return -(value)
}
console.log(value)
return value
}

assert.strictEqual(abs(4), 4)
assert.strictEqual(abs(-4), 4)
assert.strictEqual(abs(-6), 6)
assert.strictEqual(abs(0), 0)
assert.strictEqual(abs(6), 6)

console.log(" Todas las pruebas pasadas")
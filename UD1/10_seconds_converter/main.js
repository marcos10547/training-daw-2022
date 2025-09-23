const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
       const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);  
    const seconds = value % 60;
    
    return `${hours}:${minutes}:${seconds}`;
}



assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
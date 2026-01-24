// math.js (exports a function)
function add(a,b) {
    if (typeof a != 'number'|| typeof b !== 'number') {
        throw new Error('inputs must be numbers!'); // we handle our errors here

    }
    return a + b;

}
function subtract(a, b) {
    return a - b;

}
module.exports = {add, subtract}; //exporting the object
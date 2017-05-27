function isNumber(value) {
    return typeof value === 'number';
}

function sum(...args) {
    let result = 0;
    let i = args.length;
    while (i--) {
        result += args[i];
    }
    return result;
}

function mul2(a, b) {
    return a * b;
}

const inc = (a) => (a + 1);

module.exports = {
    isNumber,
    sum,
    mul2,
    inc,
};

export function isTruthy(value) {
    return Boolean(value) === true;
}

export function sum(...args) {
    let result = 0;
    let i = args.length;
    while(i--) {
        result += args[i];
    }
    return result;
}

export function mul2(a, b) {
    return a * b;
}

export function inc(a) {
    return a + 1;
} 
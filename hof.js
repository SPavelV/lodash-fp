const multiple = (a, b) => a * b;

// console.log(`multiple(2,3) `, multiple(2, 3));

// const double = (num) => multiple(num, 2);

function partial(fn, ...fixed) {
    return function(...args) {
        return fn.apply(this, fixed.concat(args));
    }
}

const double = partial(multiple, 2);

console.log(`double(21) `, double(21));
// It will display 'This is the first object example' to stdout
console.log('This is the first object example');

// It will display 'This is the second object example' to stdout
console.log('This is the %s example', 'second object');

// It will display 'Error: New Error has happened' to stderr
console.log(new Error('New Error has happened'));

const obj = 'third object';

// It will display 'This is the third object example' to stderr
console.warn(`This is the ${obj} example`);

console.dir("condition.js")
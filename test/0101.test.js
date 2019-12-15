const calculator = require('../src/0101.js');

test('Total fuel mass for the modules.', () => {
    expect(calculator([12])).toBe(2);
    expect(calculator([14])).toBe(2);
    expect(calculator([1969])).toBe(654);
    expect(calculator([100756])).toBe(33583);
});

test('0101 Answer', () => {
    const modules = require('../data/data0101.js');
    const answer = calculator(modules);
    console.log('0101 Answer', answer);
});
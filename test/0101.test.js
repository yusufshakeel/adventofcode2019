const {totalFuel} = require('../src/0101.js');

test('Total fuel mass for the modules.', () => {
    expect(totalFuel([12])).toBe(2);
    expect(totalFuel([14])).toBe(2);
    expect(totalFuel([1969])).toBe(654);
    expect(totalFuel([100756])).toBe(33583);
});

test('0101 Answer', () => {
    const modules = require('../data/data0101.js');
    const answer = totalFuel(modules);
    console.log('0101 Answer', answer);
});
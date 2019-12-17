const {totalFuelForMoulesPlusFuel} = require('../src/0102.js');

test('Total fuel mass for the modules plus fuels.', () => {
    expect(totalFuelForMoulesPlusFuel([12])).toBe(2);
    expect(totalFuelForMoulesPlusFuel([14])).toBe(2);
    expect(totalFuelForMoulesPlusFuel([1969])).toBe(966);
    expect(totalFuelForMoulesPlusFuel([100756])).toBe(50346);
});

test('0102 Answer', () => {
    const modules = require('../data/data0101.js');
    const answer = totalFuelForMoulesPlusFuel(modules);
    console.log('0102 Answer', answer);
});
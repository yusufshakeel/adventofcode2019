const {
    getArrayOfDigits,
    isContainingAtleastOnePair,
    isContainingEverAscendingDigits,
    getPasswordCount
} = require('../src/0401.js');

const data = require('../data/data0401.js');

test('Testing getArrayOfDigits function', () => {
    expect(getArrayOfDigits(123456)).toEqual([1,2,3,4,5,6]);
})

test('Testing isContainingAtleastOnePair function', () => {
    expect(isContainingAtleastOnePair(123456)).toBeFalsy();
    expect(isContainingAtleastOnePair(123445)).toBeTruthy();
})

test('Testing isContainingEverAscendingDigits function', () => {
    expect(isContainingEverAscendingDigits(123456)).toBeTruthy();
    expect(isContainingEverAscendingDigits(123454)).toBeFalsy();
})

test('Testing getPasswordCount function', () => {
    expect(getPasswordCount([100, 120])).toBe(9);
})

test('0401 Answer', () => {
    console.log('0401 Answer', getPasswordCount(data));
})
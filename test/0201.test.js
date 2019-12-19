const { op, machine } = require('../src/0201.js');
const data = require('../data/data0201.js');

test('Testing op function', () => {
    expect(op(1, 1, 2)).toBe(3);
    expect(op(2, 2, 3)).toBe(6);
})

test('Testing machine function', () => {
    expect(machine([1,0,0,0])[0]).toBe(2);
    expect(machine([1,0,0,0,99])[0]).toBe(2);
    expect(machine([2,3,0,3,99])[3]).toBe(6);
    expect(machine([2,4,4,5,99,0])[5]).toBe(9801);
    expect(machine([1,1,1,4,99,5,6,0,99])[0]).toBe(30);
    expect(machine([1,1,1,4,99,5,6,0,99])[4]).toBe(2);
})

test('0201 Answer', () => {
    data[1] = 12;
    data[2] = 2;
    console.log('0201 Answer', machine(data)[0]);
})
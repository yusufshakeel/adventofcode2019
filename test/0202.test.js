const data = require('../data/data0201.js');
const { machine2 } = require('../src/0202.js');

test('Testing machine2 function', () => {
    const result = machine2([1,0,0,0,99], 2)
    expect(result.found).toBeTruthy();
    expect(result.noun).toBe(0);
    expect(result.verb).toBe(0);
});

test('0202 Answer', () => {
    const result = machine2(data, 19690720);
    expect(result.found).toBeTruthy();
    console.log('0202 Answer', (100 * result.noun + result.verb));
})
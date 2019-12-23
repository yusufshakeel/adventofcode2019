const {
    totalStepsToIntersectingCoords,
    leastStepsToIntersectingCoord
} = require('../src/0302.js');

const data = require('../data/data0301.js');

test('Testing totalStepsToIntersectingCoords function', () => {
    const wire1Coords = [
        { x: 0, y: 0 },
        { x: 8, y: 0 },
        { x: 8, y: 5 },
        { x: 3, y: 5 },
        { x: 3, y: 2 }
    ];
    const wire2Coords = [
        { x: 0, y: 0 },
        { x: 0, y: 7 },
        { x: 6, y: 7 },
        { x: 6, y: 3 },
        { x: 2, y: 3 }
    ];
    const intersectingPoints = [ { x: 6, y: 5 }, { x: 3, y: 3 } ];
    const totalSteps = totalStepsToIntersectingCoords(wire1Coords, wire2Coords, intersectingPoints);
    expect(totalSteps).toEqual([30, 40]);
})

test('Testing leastStepsToIntersectingCoord function', () => {
    const testData0 = [
        ['R8','U5','L5','D3'],
        ['U7','R6','D4','L4']
    ];
    expect(leastStepsToIntersectingCoord(testData0)).toEqual(30);

    const testData1 = [
        ['R75','D30','R83','U83','L12','D49','R71','U7','L72'],
        ['U62','R66','U55','R34','D71','R55','D58','R8']
    ];
    expect(leastStepsToIntersectingCoord(testData1)).toEqual(610);

    const testData2 = [
        ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'],
        ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']
    ];
    expect(leastStepsToIntersectingCoord(testData2)).toEqual(410);
});

test('0302 Answer:', () => {
    console.log('0302 Answer:', leastStepsToIntersectingCoord(data));
})
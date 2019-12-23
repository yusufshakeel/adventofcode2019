const { 
    manhattanDistanceBetweenPoints,
    distanceBetweenPoints,
    isBetweenPoints,
    getOccupiedCoords,
    findIntersetingCoord,
    findIntersectingCoords,
    findManhattanDistance
} = require('../src/0301.js');

const data = require('../data/data0301.js');

test('Testing manhattanDistanceBetweenPoints function', () => {
    expect(manhattanDistanceBetweenPoints({x:0, y:0}, {x:3, y:3})).toBe(6);
    expect(manhattanDistanceBetweenPoints({x:-1, y:-1}, {x:3, y:3})).toBe(8);
    expect(manhattanDistanceBetweenPoints({x:-1, y:-1}, {x:-3, y:-3})).toBe(4);
});

test('Testing distanceBetweenPoints function', () => {
    expect(distanceBetweenPoints({x:5, y:5}, {x:1, y:2})).toBe(5);
});

test('Testing isBetweenPoints function', () => {
    expect(isBetweenPoints({x:0, y:3}, {x:0, y:0}, {x:0, y:5})).toBeTruthy();
});

test('Testing getOccupiedCoords function', () => {
    expect(getOccupiedCoords(['R3'])).toEqual([{x:0, y:0}, {x:3, y:0}]);
    expect(getOccupiedCoords(['U3'])).toEqual([{x:0, y:0}, {x:0, y:3}]);
    expect(getOccupiedCoords(['L3'])).toEqual([{x:0, y:0}, {x:-3, y:0}]);
    expect(getOccupiedCoords(['D3'])).toEqual([{x:0, y:0}, {x:0, y:-3}]);
});

test('Testing findIntersetingCoord function', () => {
    const testData1 = [{x:1, y:1}, {x:4, y:4}, {x:1, y:8}, {x:2, y:4}];
    const testData2 = [{x:0, y:1}, {x:0, y:4}, {x:1, y:8}, {x:1, y:4}];
    expect(findIntersetingCoord(testData1)).toEqual({found:true, coord: {x:2.4, y:2.4}});
    expect(findIntersetingCoord(testData2)).toEqual({found:false});
})

test('Testing findIntersectingCoords function', () => {
    const testData0 = [
        ['R8','U5','L5','D3'],
        ['U7','R6','D4','L4']
    ];
    expect(findIntersectingCoords(
        getOccupiedCoords(testData0[0]), 
        getOccupiedCoords(testData0[1])
    )).toEqual([
        {"x": 6, "y": 5}, 
        {"x": 3, "y": 3}
    ]);

    const testData1 = [
        ['R75','D30','R83','U83','L12','D49','R71','U7','L72'],
        ['U62','R66','U55','R34','D71','R55','D58','R8']
    ];
    expect(findIntersectingCoords(
        getOccupiedCoords(testData1[0]), 
        getOccupiedCoords(testData1[1])
    )).toEqual([
        {x:158, y:-12},
        {x:146, y:46},
        {x:155, y:4},
        {x:155, y:11}
    ]);

    const testData2 = [
        ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'],
        ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']
    ];
    expect(findIntersectingCoords(
        getOccupiedCoords(testData2[0]), 
        getOccupiedCoords(testData2[1])
    )).toEqual([
        {x:107, y:47},
        {x:124, y:11},
        {x:157, y:18},
        {x:107, y:71},
        {x:107, y:51}
    ]);
})

test('Testing findManhattanDistance function', () => {
    const testData0 = [
        ['R8','U5','L5','D3'],
        ['U7','R6','D4','L4']
    ];
    expect(findManhattanDistance(testData0)).toBe(6);

    const testData1 = [
        ['R75','D30','R83','U83','L12','D49','R71','U7','L72'],
        ['U62','R66','U55','R34','D71','R55','D58','R8']
    ];
    expect(findManhattanDistance(testData1)).toBe(159);

    const testData2 = [
        ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'],
        ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']
    ];
    expect(findManhattanDistance(testData2)).toBe(135);
})

test('0301 Answer', () => {
    console.log('0301 Answer:', findManhattanDistance(data));
})
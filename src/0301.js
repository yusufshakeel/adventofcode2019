/*
--- Day 3: Crossed Wires ---
The gravity assist was successful, and you're well on your way to the Venus refuelling station. During the rush back on Earth, the fuel management system wasn't completely installed, so that's next on the priority list.

Opening the front panel reveals a jumble of wires. Specifically, two wires are connected to a central port and extend outward on a grid. You trace the path each wire takes as it leaves the central port, one wire per line of text (your puzzle input).

The wires twist and turn, but the two wires occasionally cross paths. To fix the circuit, you need to find the intersection point closest to the central port. Because the wires are on a grid, use the Manhattan distance for this measurement. While the wires do technically cross right at the central port where they both start, this point does not count, nor does a wire count as crossing with itself.

For example, if the first wire's path is R8,U5,L5,D3, then starting from the central port (o), it goes right 8, up 5, left 5, and finally down 3:

...........
...........
...........
....+----+.
....|....|.
....|....|.
....|....|.
.........|.
.o-------+.
...........
Then, if the second wire's path is U7,R6,D4,L4, it goes up 7, right 6, down 4, and left 4:

...........
.+-----+...
.|.....|...
.|..+--X-+.
.|..|..|.|.
.|.-X--+.|.
.|..|....|.
.|.......|.
.o-------+.
...........
These wires cross at two locations (marked X), but the lower-left one is closer to the central port: its distance is 3 + 3 = 6.

Here are a few more examples:

R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83 = distance 159
R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = distance 135
What is the Manhattan distance from the central port to the closest intersection?
*/

const manhattanDistanceBetweenPoints = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);

const distanceBetweenPoints = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

const isBetweenPoints = (q, p1, p2) => distanceBetweenPoints(p1, q) + distanceBetweenPoints(q, p2) === distanceBetweenPoints(p1, p2);

const getOccupiedCoords = directions => {
    const coords = [];
    let currCoord = {x:0, y:0};
    let x = currCoord.x;
    let y = currCoord.y;
    let coord = {x, y};
    coords.push(coord);
    for (direction of directions) {
        const moveTowards = direction.substring(0,1);
        const moveSteps = parseInt(direction.substring(1));
        switch (moveTowards) {
            case 'R':
                x += moveSteps;
                break;
            
            case 'L':
                x -= moveSteps;
                break;
            
            case 'U':
                y += moveSteps;
                break;
            
            case 'D':
                y -= moveSteps;
                break;
        }
        coord = {x, y};
        coords.push(coord);
    }
    return coords;
};

const findIntersetingCoord = points => {
    const A = points[0];
    const B = points[1];
    const C = points[2];
    const D = points[3];

    const a1 = B.y - A.y;
    const b1 = A.x - B.x;
    const c1 = a1 * A.x + b1 * A.y;

    const a2 = D.y - C.y;
    const b2 = C.x - D.x;
    const c2 = a2 * C.x + b2 * C.y;

    const determinant = a1 * b2 - a2 * b1;

    if (determinant === 0)
        return {found: false};

    const x = (b2 * c1 - b1 * c2) / determinant;
    const y = (a1 * c2 - a2 * c1) / determinant;
    return {found: true, coord: {x, y}};
};

const findIntersectingCoords = (wire1Coords, wire2Coords) => {
    let intersectingCoords = [];
    for (let i = 0; i < wire1Coords.length - 1; i++) {
        for (let j = 1; j < wire2Coords.length - 1; j++) {
            let points = [];
            const p1 = wire1Coords[i];
            const p2 = wire1Coords[i+1];
            const p3 = wire2Coords[j];
            const p4 = wire2Coords[j+1];

            points.push(p1);
            points.push(p2);
            points.push(p3);
            points.push(p4);
            
            const result = findIntersetingCoord(points);
            
            if (result.found) {
                const c = result.coord;
                if (isBetweenPoints(c, p1, p2) && isBetweenPoints(c, p3, p4)) {
                        intersectingCoords.push(result.coord);
                }
            }
        }
    }
    return intersectingCoords;
};

const findManhattanDistance = routes => {
    const wire1Coords = getOccupiedCoords(routes[0]);
    const wire2Coords = getOccupiedCoords(routes[1]);
    const intersectingCoords = findIntersectingCoords(wire1Coords, wire2Coords);
    let distance = intersectingCoords.map(point => {
        return manhattanDistanceBetweenPoints({x:0, y:0}, point);
    });
    distance = distance.sort((a,b) => a-b);
    return distance[0];
};

module.exports = {
    manhattanDistanceBetweenPoints,
    distanceBetweenPoints,
    isBetweenPoints,
    getOccupiedCoords,
    findIntersetingCoord,
    findIntersectingCoords,
    findManhattanDistance
};
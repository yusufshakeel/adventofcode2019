const {
    numToStr,
    getGroups,
    getPairs,
    isPairInBiggerGroup,
    isNotContainingPairThatIsPartOfABiggerGroup,
    getPasswordCount2
} = require('../src/0402.js');

const data = require('../data/data0401.js');

test('Testing numToStr function', () => {
    expect(numToStr(123456)).toBe('123456');
    expect(typeof numToStr(123456)).toBe('string');
})

test('Testing getGroups function', () => {
    expect(getGroups(1)).toEqual(['1']);
    expect(getGroups(123456)).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(getGroups(111234)).toEqual(['111', '2', '3', '4']);
    expect(getGroups(112233)).toEqual(['11', '22', '33']);
    expect(getGroups(111122)).toEqual(['1111', '22']);
    expect(getGroups(112444)).toEqual(['11', '2', '444']);
})

test('Testing getPairs function', () => {
    expect(getPairs(112233)).toEqual(['11', '22', '33']);
    expect(getPairs(122234)).toEqual(['22', '22']);
    expect(getPairs(111122)).toEqual(['11', '11', '11', '22']);
    expect(getPairs(114444)).toEqual(['11', '44', '44', '44']);
})

test('Testing isPairInBiggerGroup function', () => {
    expect(isPairInBiggerGroup('11', '111')).toBeTruthy();
    expect(isPairInBiggerGroup('22', '111')).toBeFalsy();
})

test('Testing isNotContainingPairThatIsPartOfABiggerGroup function', () => {
    expect(isNotContainingPairThatIsPartOfABiggerGroup(346779)).toBeTruthy();
    expect(isNotContainingPairThatIsPartOfABiggerGroup(457889)).toBeTruthy();
    expect(isNotContainingPairThatIsPartOfABiggerGroup(111222)).toBeFalsy();
    expect(isNotContainingPairThatIsPartOfABiggerGroup(111122)).toBeTruthy();
    expect(isNotContainingPairThatIsPartOfABiggerGroup(123444)).toBeFalsy();
})

test('0402 Answer', () => {
    console.log('0402 Answer', getPasswordCount2(data));
})
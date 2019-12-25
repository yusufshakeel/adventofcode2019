/*
--- Part Two ---
An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

Given this additional criterion, but still ignoring the range rule, the following are now true:

112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).
How many different passwords within the range given in your puzzle input meet all of the criteria?

Your puzzle input is still 284639-748759.
*/

const {
    getPasswords
} = require('./0401.js');

const numToStr = number => number + '';

const getGroups = number => {
    const num = numToStr(number);
    const groups = [];
    let beg = 0, end = 0;
    while (end < num.length) {
        let group = num.substring(beg, end);
        if (num[beg] === num[end]) {
            end++;
            continue;
        }
        groups.push(group);
        beg = end;
        end++;
    }
    groups.push(num.substring(beg, end));
    return groups;
};

const getPairs = number => {
    const num = numToStr(number);
    let pairs = [];
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] === num[i + 1]) {
            pairs.push(num.substring(i, i + 2));
        }
    }
    return pairs;
};

const isPairInBiggerGroup = (pair, group) => {
    return group.indexOf(pair) > -1;
};

const isNotContainingPairThatIsPartOfABiggerGroup = number => {
    const groups = getGroups(number);
    const pairs = getPairs(number);
    let biggerGroups = groups.reduce((bigGroup, group) => {
        if (group.length > 2) {
            bigGroup.push(group);
        }
        return bigGroup;
    }, []);
    const uniquePairs = [...new Set(pairs)];
    for (let pair of uniquePairs) {
        let foundCount = 0;
        for (let bigGroup of biggerGroups) {
            if (isPairInBiggerGroup(pair, bigGroup)) {
                foundCount++;
            }
        }
        if (foundCount === 0) {
            return true;
        }
    }
    return false;
};

const getPasswordCount2 = range => {
    const passwords = getPasswords(range);
    const passwords2 = [];
    for (let password of passwords) {
        if (isNotContainingPairThatIsPartOfABiggerGroup(password)) {
            passwords2.push(password);
        }
    }
    return passwords2.length;
};

module.exports = {
    numToStr,
    getGroups,
    getPairs,
    isPairInBiggerGroup,
    isNotContainingPairThatIsPartOfABiggerGroup,
    getPasswordCount2
};
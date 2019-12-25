/*
--- Day 4: Secure Container ---
You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

However, they do remember a few key facts about the password:

It is a six-digit number.
The value is within the range given in your puzzle input.
Two adjacent digits are the same (like 22 in 122345).
Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
Other than the range rule, the following are true:

111111 meets these criteria (double 11, never decreases).
223450 does not meet these criteria (decreasing pair of digits 50).
123789 does not meet these criteria (no double).
How many different passwords within the range given in your puzzle input meet these criteria?

Your puzzle input is 284639-748759.
*/

const getArrayOfDigits = number => number.toString(10).replace(/\D/g, '0').split('').map(Number);

const isContainingAtleastOnePair = number => {
    const digits = getArrayOfDigits(number);
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] === digits[i + 1]) {
            return true;
        }
    }
    return false;
};

const isContainingEverAscendingDigits = number => {
    const digits = getArrayOfDigits(number);
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] > digits[i + 1]) {
            return false;
        }
    }
    return true;
};

const getPasswords = range => {
    const start = range[0];
    const end = range[1];
    const passwords = [];
    for (let p = start; p <= end; p++) {
        if (isContainingAtleastOnePair(p) && isContainingEverAscendingDigits(p)) {
            passwords.push(p);
        }
    }
    return passwords;
};

const getPasswordCount = range => {
    return getPasswords(range).length;
};

module.exports = {
    getArrayOfDigits,
    isContainingAtleastOnePair,
    isContainingEverAscendingDigits,
    getPasswords,
    getPasswordCount
};
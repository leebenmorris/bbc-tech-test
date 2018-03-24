const { expect } = require('chai');

const {
    convert,
    convert_recursive
} = require('../main');

const roman = require('roman-numeral');

describe('Roman Numeral Converter', function () {
    it('should be a function', function () {
        expect(convert).to.be.a('function');
    });

    it('should only accept a number as input, returning an error message if not passed a number', function () {
        const errorMsg = 'Error: Please input a number';
        expect(convert()).to.equal(errorMsg);
        expect(convert({})).to.equal(errorMsg);
        expect(convert([])).to.equal(errorMsg);
        expect(convert(true)).to.equal(errorMsg);
        expect(convert('1')).to.equal(errorMsg);
    });

    it('should only accept numbers in the range 1 to 3999 inclusive', function () {
        const errorMsg = 'Error: Please input a number between 1 and 3999 inclusive'
        expect(convert(-2)).to.equal(errorMsg);
        expect(convert(0)).to.equal(errorMsg);
        expect(convert(4000)).to.equal(errorMsg);

        expect(convert(1)).to.not.equal(errorMsg);
        expect(convert(2000)).to.not.equal(errorMsg);
        expect(convert(3999)).to.not.equal(errorMsg);
    });

    it('should succesfully convert the decimal numbers 1 to 10', function () {
        const decimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
        decimals.forEach((decimal, i) => {
            const actual = convert(decimal);
            const expected = romans[i];
            expect(actual).to.equal(expected);
        });
    });

    it('should succesfully convert the multiples of 10 from 10 to 100', function () {
        const decimals = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const romans = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
        decimals.forEach((decimal, i) => {
            const actual = convert(decimal);
            const expected = romans[i];
            expect(actual).to.equal(expected);
        });
    });

    it('should succesfully convert the multiples of 100 from 100 to 1000', function () {
        const decimals = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        const romans = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'];
        decimals.forEach((decimal, i) => {
            const actual = convert(decimal);
            const expected = romans[i];
            expect(actual).to.equal(expected);
        });
    });

    it('compare results from 1 to 3999 with the output from an npm library that also carries out roman numeral conversions', function () {
        for (let i = 1; i <= 3999; i++) {
            let actual = convert(i);
            let expected = roman.convert(i);
            expect(actual).to.equal(expected);
        }
    });

    it('for fun, carry out the last test with a recursive version of the conversion logic', function () {
        for (let i = 1; i <= 3999; i++) {
            let actual = convert_recursive(i);
            let expected = roman.convert(i);
            expect(actual).to.equal(expected);
        }
    });
});
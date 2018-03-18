const { expect } = require('chai');

const { convert } = require('../main');

describe('Roman Numeral Converter', function () {
    it('should be a function', function () {
        expect(convert).to.be.a('function');
    });

    it('should only accept a number as input, returning an error message if not passed a number', function () {
        const errorMsg = 'Please input a number';
        expect(convert()).to.equal(errorMsg);
        expect(convert({})).to.equal(errorMsg);
        expect(convert([])).to.equal(errorMsg);
        expect(convert(true)).to.equal(errorMsg);
        expect(convert('1')).to.equal(errorMsg);
    });

    it('should only accept numbers in the range 1 to 3999 inclusive', function () {
        const errorMsg = 'Please input a number between 1 and 3999 inclusive'
        expect(convert(-2)).to.equal(errorMsg);
        expect(convert(0)).to.equal(errorMsg);
        expect(convert(4000)).to.equal(errorMsg);
        expect(convert(1)).to.not.equal(errorMsg);
        expect(convert(2000)).to.not.equal(errorMsg);
        expect(convert(3999)).to.not.equal(errorMsg);
    })
});
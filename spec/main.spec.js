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
});
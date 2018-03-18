const { expect } = require('chai');

const { convert } = require('../main');

describe('Roman Numeral Converter', function () {
    it('should be a function', function () {
        expect(convert).to.be.a('function');
    });
});
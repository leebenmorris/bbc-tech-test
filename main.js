function convert(decimal) {
    if (typeof decimal !== 'number') return 'Please input a number';
    if (decimal < 1 || decimal > 3999) return 'Please input a number between 1 and 3999 inclusive';
}

module.exports = { convert };
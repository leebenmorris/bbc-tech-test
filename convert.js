function convert(input) {
    // ensure input is a number
    if (typeof input !== 'number') return 'Error: Please input a number';

    // ensure input is in the correct range
    if (input < 1 || input > 3999) return 'Error: Please input a number between 1 and 3999 inclusive';

    // matched arrays of decimal number to roman numeral mappings
    // with subtractive notation the numbers 4, 9, 40, 90, 400, 900 are special cases and so will be explicitly handled
    const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // starting index points to the largest number in the decimal array or its corresponding roman numeral
    let index = decimal.length - 1;

    // output will be a string of roman numerals, so define the output variable as a string here
    let output = '';

    // while the input value remains above zero
    while (input > 0) {
        // if the input value minus the current decimal value is greater than or equal to zero
        if (input - decimal[index] >= 0) {
            // subtract the current decimal value from the input
            input -= decimal[index];
            // concatenate the corresponding roman numeral to the output string
            output += roman[index];
        } else {
            // else point to the next lowest number in the decimal array
            index--;
        }
    }

    return output;
}

function convert_recursive(input) {
    // ensure input is a number
    if (typeof input !== 'number') return 'Error: Please input a number';

    // ensure input is in the correct range
    if (input < 1 || input > 3999) return 'Error: Please input a number between 1 and 3999 inclusive';

    // matched arrays of decimal number to roman numeral mappings
    // with subtractive notation the numbers 4, 9, 40, 90, 400, 900 are special cases and so will be explicitly handled
    const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    // define recursive function for roman numeral conversion
    function transform(input, output, index) {
        // return result if input value is 0
        if (input === 0) return output;

        // if the input value minus the current decimal value is greater than or equal to zero
        if (input - decimal[index] >= 0) {
            // recursively call the transform function, but subtract current decimal value, concatenate current roman numeral to output, but do not change the index
            return transform(input - decimal[index], output + roman[index], index)
        } else {
            // recursively call the transform function, leaving input and output alone, but decrement the array index to select the next lowest number
            return transform(input, output, index - 1)
        }
    }

    // return result of recursive method after passing in initial values
    return transform(input, '', decimal.length - 1);
}

module.exports = {
    convert,
    convert_recursive
};
const prompt = require('prompt');

const { convert } = require('./convert');

// the following is an extra to have a friendly command line interface to the conversion method.
// I have not changed the method to facilitate this, so have used checks on input and return values
// from conversions to ensure correct input and to return sensible messages
prompt.start();

const inputMessage = 'Please enter a number between 1 and 3999 inclusive, or q to quit';

// self executing function
(function display() {
    prompt.get([inputMessage], (err, res) => {
        const input = res[inputMessage];

        // if 'q' or 'Q' is input, end the process, else carry out the conversion
        if (input.toLowerCase() === 'q') {
            process.exit()
        } else {
            // check if input string contains a number, if so, coerce input to number and pass to convert, else pass string to convert to generate error message
            const roman = convert(isNaN(input) ? input : +input);

            // check if result is an error (starts with 'Error'), if so display error message, else display result with friendly message
            const output = roman.slice(0, 5) === 'Error' ? roman : `Roman Numeral equivalent of ${input} is ${roman}`;

            // display output message
            console.log(output + '\n');

            // restart display function
            display();
        };
    })
})();

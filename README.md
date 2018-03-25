## The Problem
- Create a method that converts decimal numbers into their Roman Numeral equivalent
- Only allow conversions from 1 to 3999 inclusive

## Approach
- Researched roman numerals on Wikipedia using the [link](http://en.wikipedia.org/wiki/Roman_numerals) provided in the tech test email 
- The Roman Numeral string created from the decimal number input is additive, starting with the largest Roman Numeral equivalent and ending in the smallest that make up the equivalent to the decimal number being converted
- Each time a Roman Numeral equivalent is added to the output string, the equivalent decimal number needs to be subtracted from the input, until the input is reduced to zero
- The numbers 4, 9, 40, 90, 400 and 900 are special cases in subtractive notation, and are handled explicitly in the code
- A simple command line interface has been provided as a front end to the code
- Unit tests have been carried out during the creation of this solution using a TDD approach, that is, the tests were written before the feature being tested was implemented in code

## Assumptions
- I have decided to follow the subtractive notation format as this appears to be very common and is the one I am personally most familiar with

## Caveats
- As mentioned above, only numbers from 1 to 3999 inclusive will be converted

## Running the code
- Install NodeJS from [here](https://nodejs.org/en/download/) if you do not already have it. This will also install NPM.
- From a command prompt at the root folder of the project.
    - Run `npm install` to install all dependencies.
    - Run `npm start`. This will start a simple command prompt program to accept input and return the result of the Roman Numeral conversion.

## Running the tests
- From a command prompt at the root folder of the project.
    - Run `npm test`.
    - The tests are located in the spec folder at the root of the project.


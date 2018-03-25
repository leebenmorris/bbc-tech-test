## The Problem
- Create a method that converts decimal (base 10) numbers into their Roman Numeral equivalent
- Only allow conversions from 1 to 3999 inclusive

## Approach
- Researched roman numerals on Wikipedia using the [link](http://en.wikipedia.org/wiki/Roman_numerals) provided in the tech test email 
- The Roman Numeral string created from the decimal number input is additive, starting with the largest Roman Numeral equivalent and ending in the smallest that make up the equivalent to the decimal number being converted

## Assumptions
- I have decided to follow the subtractive notation format as this appears to be very common and is the one I am personally most familiar with

## Caveats

## Running the code
- Install NodeJS from [here](https://nodejs.org/en/download/) if you do not already have it. This will also install NPM.
- From a command prompt at the root folder of the project.
    - Run `npm install` to install all dependencies.
    - Run `npm start`. This will start a simple command prompt program to accept input and return the result of the Roman Numeral conversion.

## Running the tests
- From a command prompt at the root folder of the project.
    - Run `npm test`.
    - The tests are located in the spec folder at the root of the project.


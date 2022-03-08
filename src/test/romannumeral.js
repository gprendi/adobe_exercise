/**
 * @namespace RomanNumeralTesting
 * @description Testing for decimal to roman numeral conversion
 */

const { assert, expect } = require('chai');
const { decimalToRoman } = require('../conversion/decimalToRoman');
const { OutOfRangeError, InvalidInputError, MissingParameterError } = require('../conversion/conversionErrors');

/**
 * @function testDecimalToRoman
 * @description Tests suite for decimal to roman numeral conversion
 * @memberof RomanNumeralTesting
 */
describe('FUNCTION decimalToRoman: converting decimal numbers to romannumerals', () => {
    
    /**
     * @memberof RomanNumeralTesting
     * @description Calling the function with no parameters
     */
    it('calling with no parameters should throw MissingParameterError', (done) => {
        expect(() => decimalToRoman()).to.throw(MissingParameterError);
        done();
    })

     /**
     * @memberof RomanNumeralTesting
     * @description Calling the function with non-number paramater
     */
    it('calling with a parameter that is not a number should throw InvalidInputError', (done) => {
        expect(() => decimalToRoman("notANumber")).to.throw(InvalidInputError);
        expect(() => decimalToRoman([])).to.throw(InvalidInputError);
        expect(() => decimalToRoman({})).to.throw(InvalidInputError);
        done();
    })

     /**
     * @memberof RomanNumeralTesting
     * @description Calling the function with a float number
     */
    it('calling with a parameter that is a float number should throw InvalidInputError', (done) => {
        expect(() => decimalToRoman(1.5)).to.throw(InvalidInputError);
        expect(() => decimalToRoman(-0.5)).to.throw(InvalidInputError);
        expect(() => decimalToRoman(256.5)).to.throw(InvalidInputError);
        done(); 
    });

    /**
     * @memberof RomanNumeralTesting
     * @description Calling the function with a number out of range
     */
    it('calling with a parameter that is a number but outside of range 1 - 255 should throw OutOfRangeError', (done) => {
        expect(() => decimalToRoman(0)).to.throw(OutOfRangeError);
        expect(() => decimalToRoman(256)).to.throw(OutOfRangeError);

        done();
    })

     /**
     * @memberof RomanNumeralTesting
     * @description Correct conversion of decimal numbers to roman numerals
     */
    describe('calling with a paremeter that is an integer inside the range 1 - 255', () => {
        
        it('decimalToRoman(1) should return I', (done) => {
            expect(decimalToRoman(1)).to.equal('I');

            done();
        })

        it('decimalToRoman(5) should return V', (done) => {
            expect(decimalToRoman(5)).to.equal('V');
            done();
        })

        it('decimalToRoman(10) should return X', (done) => {
            expect(decimalToRoman(10)).to.equal('X');

            done();
        })

        it('decimalToRoman(50) should return L', (done) => {
            expect(decimalToRoman(50)).to.equal('L');

            done();
        })

        it('decimalToRoman(100) should return C', (done) => {
            expect(decimalToRoman(100)).to.equal('C');

            done();
        })

        it('decimalToRoman(255) should return CCLV', (done) => {
            expect(decimalToRoman(255)).to.equal('CCLV');

            done();
        })
    })

    
});
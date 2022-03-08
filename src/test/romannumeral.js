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
        expect(() => decimalToRoman(265.5)).to.throw(InvalidInputError);
        expect(() => decimalToRoman(4000.5)).to.throw(InvalidInputError);
        done(); 
    });

    /**
     * @memberof RomanNumeralTesting
     * @description Calling the function with a number out of range
     */
    it('calling with a parameter that is a number but outside of range 1 - 3999 should throw OutOfRangeError', (done) => {
        expect(() => decimalToRoman(0)).to.throw(OutOfRangeError);
        expect(() => decimalToRoman(4000)).to.throw(OutOfRangeError);

        done();
    })

     /**
     * @memberof RomanNumeralTesting
     * @description Correct conversion of decimal numbers to roman numerals
     */
    describe('calling with a paremeter that is an integer inside the range 1 - 3999', () => {
        
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

        it('decimalToRoman(400) should return CD', (done) => {
            expect(decimalToRoman(400)).to.equal('CD');

            done();
        })

        it('decimalToRoman(500) should return D', (done) => {
            expect(decimalToRoman(500)).to.equal('D');

            done();
        })

        it('decimalToRoman(900) should return CM', (done) => {
            expect(decimalToRoman(900)).to.equal('CM');

            done();
        })

        it('decimalToRoman(1000) should return M', (done) => {
            expect(decimalToRoman(1000)).to.equal('M');

            done();
        })
        
        it('decimalToRoman(3000) should return MMM', (done) => {
            expect(decimalToRoman(3000)).to.equal('MMM');

            done();
        });

        it('decimalToRoman(3999) should return CCLV', (done) => {
            expect(decimalToRoman(3999)).to.equal('MMMCMXCIX');
            done();
        })
    })

    
});
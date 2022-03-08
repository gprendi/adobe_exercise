const decimalToRoman = require('../conversion/decimalToRoman').decimalToRoman;

/**
 * Express router for the roman numeral conversion
 * @description Express router for the roman numeral conversion
 * @memberof Routes
 * @name RomanNumeral
 */
const router = require('express').Router();

/**
 * GET route to handle decimal to roman numeral conversion
 * @memberof romannumeral
 * @name getRomanNumeral
 */
router.get('/', (req, res) => {
    // checks if query is provided
    if (req.query.query) {
        // convert query to integer, or throw if cannot be converted
        let decimal;
        try {
            decimal = parseInt(req.query.query);

            // to catch float numbers in the query
            if (parseFloat(req.query.query) - decimal !== 0) throw new Error('Not an Integer');
        } catch (err) {
            // respond with an error if the query cannot be converted to an integer
            res.status(400).json({
                error: 'Only integers can be converted to roman numerals'
            });
            return;
        }

        // convert decimal to roman numeral
        let result;
        try {
            result = decimalToRoman(decimal);
        } catch (err) {
            // throw error if the decimal cannot be converted to a roman numeral
            res.status(400).json({
                error: err.message
            });
            return;
        }

        // if everything is correct, the correct response will be sent
        res.json({
            input: decimal,
            output: result
        });
    } else {
        // respond with an error if the query is not provided
        res.status(400).json({
            error: 'Please provide a query parameter'
        });
    }
});

module.exports = router;

const { decimalToRoman, calculateRange } = require('../conversion/decimalToRoman');
const logger = require('../logger');

const { counter, histogram } = require('../monitor');
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
    const start = new Date();
    counter.inc();
    logger.info('Roman numeral conversion request received and metrics counter incremented');

    // checks if query is provided
    if (req.query.query) {
        // convert query to integer, or throw if cannot be converted
        respondSingle(res, req.query.query);
    } else if (req.query.min && req.query.max) {
        respondRange(res, req.query.min, req.query.max);
    } else if ((req.query.min || req.query.max) && !(req.query.min && req.query.max)) {
        res.status(400).json({
            error: 'Range requires both a min and a max'
        });
        logger.debug('Range did not receive both a min and a max from request');
    } else {
        // respond with an error if the query is not provided
        res.status(400).json({
            error: 'Please provide a query parameter'
        });
        logger.debug('No query provided in request');
    }

    const end = new Date() - start;
    histogram.observe(end / 1000);
    logger.info('Roman numeral conversion request completed and metrics histogram recorded');
});


function respondSingle (res, decim) {
    let decimal;
    try {
        decimal = parseInt(decim);

        // to catch float numbers in the query
        if (parseFloat(decim) - decimal !== 0) throw new Error('Not an Integer');
    } catch (err) {
        // respond with an error if the query cannot be converted to an integer
        res.status(400).json({
            error: 'Only integers can be converted to roman numerals'
        });
        logger.debug('Roman numeral conversion unsuccessful and 400 response status with error sent');
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
        logger.debug('Roman numeral conversion unsuccessful and 400 response status with error sent');
        return;
    }

    // if everything is correct, the correct response will be sent
    res.json({
        input: decimal,
        output: result
    });

    logger.debug('Roman numeral conversion successful and response sent');
}

async function respondRange (res, min, max) {
    let minNum, maxNum;
    try {
        minNum = parseInt(min);
        maxNum = parseInt(max);

        // to catch float numbers in the query
        if (parseFloat(min) - minNum !== 0 || parseFloat(max) - maxNum !== 0) throw new Error('Not an Integer');
    } catch (err) {
        // respond with an error if the query cannot be converted to an integer
        res.status(400).json({
            error: 'Only integers can be converted to roman numerals'
        });
        logger.debug('Roman numeral conversion unsuccessful and 400 response status with error sent');
        return;
    }

    // convert decimal to roman numeral
    let result;
    try {
        result = await calculateRange(minNum, maxNum);
    } catch (err) {
        // throw error if the decimal cannot be converted to a roman numeral
        res.status(400).json({
            error: err.message
        });
        logger.debug('Roman numeral conversion unsuccessful and 400 response status with error sent');
        return;
    }

    // if everything is correct, the correct response will be sent
    res.json({
        conversions: result
    });

    logger.debug('Roman numeral range conversion successful and response sent');
}

module.exports = router;

const router = require('express').Router();
const decimalToRoman = require('../conversion/decimalToRoman').decimalToRoman;

router.get('/', (req, res) => {
  if (req.query.query) {
    let decimal;
    try {
      decimal = parseInt(req.query.query);

      // to catch float numbers in the query
      if (req.query.query - decimal !== 0) throw new Error('Not an Integer');
    } catch (e) {
      res.status(400).json({
        error: 'Only integers can be converted to roman numerals'
      });
      return;
    }

    let result;
    try {
      result = decimalToRoman(decimal);
    } catch (err) {
      res.status(400).json({
        error: err.message
      });
      return;
    }

    res.json({
      input: decimal,
      output: result
    });
  } else {
    res.status(400).json({
      error: 'Please provide a query parameter'
    });
  }
});

module.exports = router;

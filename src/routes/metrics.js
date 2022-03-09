const router = require('express').Router();
const { client } = require('../monitor');
const { logger } = require('../logger');

router.get('/', async (res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
    logger.info('Metrics sent');
});

module.exports = router;

const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.create);
router.post('/login', controller.login);

module.exports = router;

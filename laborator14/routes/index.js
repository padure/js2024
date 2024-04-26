const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/contacte', indexController.contacte);
router.get('/carti', indexController.carti);

module.exports = router;

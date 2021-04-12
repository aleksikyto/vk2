'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {body} = require('express-validator');

router.post('/login', authController.login);

module.exports = router;
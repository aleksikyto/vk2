'use strict';
// userRoute
const express = require('express');
const multer  = require('multer');
const userController = require('../controllers/userController');
const {body} = require('express-validator');
const router = express.Router();

router.get('/', userController.user_list_get);
router.post('/',
    body('name').isLength({min: 3}).escape().blacklist(';'),
    body('email').isEmail(),
    body('password').isLength({min: 8}).matches('(?=.*[A-Z])'),
    userController.user_create);

router.get('/:id', userController.user_get_by_id);
router.put('/:id', userController.user_update);
router.delete('/:id', userController.user_delete);

module.exports = router;

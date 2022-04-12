const express = require('express');
const router = express('router');
const ejs = require('ejs');
const dataBase = require('../database/database');
const nomClass = require('../controllers/controllers');


router.get('/',nomClass.UserGet);
router.post('/', nomClass.UserPost);
router.get('/chat', nomClass.Chat)
router.get('/message',nomClass.Message)




module.exports=router;
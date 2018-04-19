var express = require('express');
var request = require('request');
var axios = require ('axios');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('application', { title: 'Express' });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Products catalog' });
});

module.exports = router;

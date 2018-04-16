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

/*router.get('/dashboard', (req, res) => {
    var user = {
  		name: "John Doe",
	    email: "johndoe@aditus.net",
	    contributions: [
	        {
	            date: 1520665580,
	            amount: 1024.00,
	            currency: 'SGD'
	        },
	        {
	            date: 1520655580,
	            amount: 2048.00,
	            currency: 'SGD'
	        }
	    ]
  	};

	res.render('dashboard', { title: 'Dashboard',
		user: user,
		messages: {
		    messages: [
			{
			  id: 1,
			  message: "This is message 1"
			},
			{
			  id: 2,
			  message: "This is message 2"
			}
			]
		}
	});
});*/

module.exports = router;

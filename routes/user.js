var express = require('express');
var router = express.Router();
var userModel = require('../model/user');

/* Route login screen */
router.get('/', function(req, res, next) {
	res.render('user', {
		title: 'Welcome Element UI login screen'
	});
});

/* Route check screen */
router.post('/check', function(req, res, next) {
	// in callback function redirect dosen't work
	// res.redirect('../detail');
	console.log('checked message');
	console.log('checked message');
	// userModel.checkUserExist(
	// 	req.body.username,
	// 	req.body.userpass
	// ).then( data => {
	// 	console.log('debug async method')
	// 	if (data.username === 'admin') {
	// 		res.status(200).send('success');
	// 	} else {
	// 		res.status(404).send('error');
	// 	}
	// });
	//  console.log( 'debug info *********************' + userRecord)
	//  if( userRecord && typeof( userRecord ) != 'undefined'){
	//  	console.log('debug sucess' + userRecord);
	// res.status(200).send('success');
	//  }else{
	//  	console.log('debug error' + userRecord);
	//  	res.status(404).send('error');
	//  }
});

module.exports = router;
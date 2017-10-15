const Sequelize = require('sequelize');
// user model design
const baseSequelize = require('./baseSequelize');

// define prototype of user
var user = baseSequelize.define('user', {
	"id": {
		"type": Sequelize.BIGINT,
		"primaryKey": true
	},
	"username": Sequelize.STRING(100),
	"userpass": Sequelize.STRING(100)
	},
	{
		"timestamps":false,
		"freezeTableName": true
	}
);
// major logic for user
function checkUserExist(username, userpass) {
	
	return user.findOne({
		"where": {
			"username": username,
			"userpass": userpass
		}
	}).then( function (res) { 
		// if(res){
			// return res.dataValues.username;
		return res.dataValues
		// }
	}).catch( err => {
		// console.log(err);
	})

}
module.exports = {
	"checkUserExist": checkUserExist
};
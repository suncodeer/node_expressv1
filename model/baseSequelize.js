const Sequelize = require('sequelize');
const config = require('../config/mysql_config');

var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		"host": config.host,
		"dialect": "mysql",
		"port": "3306",
		"pool": {
			max: 5,
			min: 0,
			idle: 30000
		}
	}
);

module.exports = sequelize;
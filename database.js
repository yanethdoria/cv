
const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'bsv5nst4y7n12w3d2mcy-mysql.services.clever-cloud.com',
	database : 'bsv5nst4y7n12w3d2mcy',
	user : 'ualyztzbrtl9rsur',
	password : 'pnH55ZFiAyPkm4HRDdIj'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;

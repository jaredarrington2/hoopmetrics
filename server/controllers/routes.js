var express = require('express');
var pg = require('pg');

var path = require('path')
var router = express.Router();

var dbUrl;

if(process.env.DATABASE_URL){
	dbUrl = process.env.DATABASE_URL
} else {
	dbUrl = {
		user: process.argv.POSTGRES_USER,
		password: process.argv.POSTGRES_PASSWORD,
		database: 'testdb',
		host: 'localhost',
		port: 5432
	}
}

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

router.post('/create-team', (req,res) => {
	console.log(req.body);
	// models.Team.create({
	// 	school: req.body.school,
	// 	teamname: req.body.teamname,
	// 	colorone: req.body.colorone,
	// 	colortwo: req.body.colortwo
	// });
});

module.exports = router;

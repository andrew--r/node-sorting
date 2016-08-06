var express = require('express');
var router = express.Router();

var title = 'Сортировка ваших массивов онлайн, бесплатно и без СМС';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: title,
	});
});

module.exports = router;

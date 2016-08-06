var express = require('express');
var router = express.Router();
var cocktailSort = require('../sorting');

var title = 'Сортировка ваших массивов онлайн, бесплатно и без СМС';

/* GET result page. */
router.get('/', function(req, res, next) {
	var input = prepareInput(req.query.input);
	var inputCopy = input.slice();
	var output;

	console.time('cocktail sort');
	output = cocktailSort(inputCopy);
	console.timeEnd('cocktail sort');

	res.render('result', {
		title: title,
		input: arrayToString(input),
		output: arrayToString(output),
	});
});

function prepareInput(string) {
	return string
		.replace(/\D+/g, ' ')
		.split(' ')
		.map(charToInt);
}

function charToInt(char) {
	return parseInt(char, 10);
}

function arrayToString(array) {
	return '[' + array.join(', ') + ']';
}

module.exports = router;

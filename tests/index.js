var expect = require('expect.js');
var cocktailSort = require('../source/sorting');

var testArray = [5, 4, 3, 2, 1];

describe('node-sorting app', function () {
	describe('#cocktailSort', function () {
		var sortedTestArray = cocktailSort(testArray.slice());
		var nativelySortedTestArray = testArray.slice().sort(function (a, b) {
			return a - b;
		});

		it('should return an array', function () {
			expect(cocktailSort(testArray.slice())).to.be.an('array');
		});

		it('should return sorted array', function () {
			expect(sortedTestArray).to.eql(nativelySortedTestArray);
		});
	});
});

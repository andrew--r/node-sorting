function swap(array, a, b) {
	var tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
	return array;
}

function cocktailSort(array) {
	var itemsCount = array.length;
	var lastIndex = itemsCount - 1;
	var left = 0;
	var right = 0;
	var wasSwapped = true;
	var leftSwapped;
	var rightSwapped;

	while (wasSwapped) {
		wasSwapped = false;
		leftSwapped = false;
		rightSwapped = false;

		for (var i = left; i < (lastIndex - right); i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				leftSwapped = true;
			}
		}

		if (leftSwapped) {
			right++;
		}

		for (var i = lastIndex - right; i >= left; i--) {
			if (array[i] < array[i -1]) {
				swap(array, i, i - 1);
				rightSwapped = true;
			}
		}

		if (rightSwapped) {
			left++;
		}

		if (leftSwapped || rightSwapped) {
			wasSwapped = true;
		}
	}

	return array;
}

module.exports = cocktailSort;

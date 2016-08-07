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

		for (var l = left; l < (lastIndex - right); l++) {
			if (array[l] > array[l + 1]) {
				swap(array, l, l + 1);
				leftSwapped = true;
			}
		}

		if (leftSwapped) {
			right++;
		}

		for (var r = lastIndex - right; r >= left; r--) {
			if (array[r] < array[r -1]) {
				swap(array, r, r - 1);
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

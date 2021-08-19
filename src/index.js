
exports.min = function min(array = []) {
	if (array.length === 0) {
		//console.log(array.length);
		return 0;
	} else { 
		array.sort((a, b) => a - b);
		return array[0];
	}
}

exports.max = function max(array = []) {
	if (array.length === 0) {
		return 0;
	} else { 
		array.sort((a, b) => a - b);
		return array[array.length - 1];
	}
}

exports.avg = function avg (array = []) {
	if (array.length === 0) {
		return 0;
	}
	else {
		let res = 0;
	// 	for (let key of array) {
	// 		res += key;
	// 	}
	// res = res / array.length;
		
		res = array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
		return res;
	}
}

module.exports = function rotate (input, offset) {
	if (typeof input === 'object') {
		input = JSON.stringify(input);
	}

	var length = input.length;
	var result = '';

	for (var index = 0; index < length; ++index) {
		result += String.fromCharCode(input.charCodeAt(index) + offset);
	}

	return result;
}

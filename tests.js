var test = require('tape');
var casual = require('casual');
var rot = require('./');

var testString = casual.sentence;
var testObject = {};

casual.define('random_string', function () {
	return casual.random_element([
		casual.phone,
		casual.word,
		casual.sentence
	]);
});

var numberOfTestProps = casual.integer(5, 20);

for (var i = 0; i < numberOfTestProps; ++i) {
	testObject[casual.random_string] = casual.random_string;
}

testObject[casual.word] = casual.sentence;

var testArray = [casual.word, casual.sentence, casual.integer(10, 20)];

test('String rotations', function (t) {
	t.equal(testString, rot(rot(testString, 10), -10));
	t.equal(testString, rot(rot(testString, 1), -1));
	t.equal(testString, rot(rot(testString, 20), -20));
	t.equal(testString, rot(rot(testString, 30), -30));
	t.equal(testString, rot(rot(testString, 50), -50));
	t.notEqual(testString, rot(rot(testString, 10), -20));
	t.end();
});

test('Object rotation', function (t) {
	t.deepEqual(testObject, JSON.parse(rot(rot(testObject, 10), -10)));
	t.deepEqual(testObject, JSON.parse(rot(rot(testObject, 1), -1)));
	t.deepEqual(testObject, JSON.parse(rot(rot(testObject, 20), -20)));
	t.deepEqual(testObject, JSON.parse(rot(rot(testObject, 30), -30)));
	t.deepEqual(testObject, JSON.parse(rot(rot(testObject, 50), -50)));
	t.end();
});

test('Array rotation', function (t) {
	t.deepEqual(testArray, JSON.parse(rot(rot(testArray, 10), -10)));
	t.deepEqual(testArray, JSON.parse(rot(rot(testArray, 1), -1)));
	t.deepEqual(testArray, JSON.parse(rot(rot(testArray, 20), -20)));
	t.deepEqual(testArray, JSON.parse(rot(rot(testArray, 30), -30)));
	t.deepEqual(testArray, JSON.parse(rot(rot(testArray, 50), -50)));
	t.end();
});

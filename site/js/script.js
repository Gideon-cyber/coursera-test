function multiply(x, y) {
	return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};

	return myFunc;
}

var multiplyby3 = makeMultiplier(3);
console.log(multiplyby3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));


function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyby3)
console.log(result);
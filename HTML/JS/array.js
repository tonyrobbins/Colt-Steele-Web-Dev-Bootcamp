var numbers = [1, 2, 3, 4, 5]
var letters = ["a", "b", "c"]

// Prints an array in reverse order without changing the array
function printReversal(arr) {
	for(i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
	}
}

var ones = [1, 1, 1, 1]
var twos = [2, 1, 1, 1]
var alpha = ["a", "b", "c"]
var bravo = ["b", "b", "b"]

Checks an array to see if all elements are the same and returns true if they are
function isUniform(arr) {
	var check = arr[0]
	for(i = arr.length - 1; i < arr.length; i++) {
		while(check === arr[i]);
		console.log(true)
	}
	console.log(false)
}
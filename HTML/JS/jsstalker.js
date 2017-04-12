// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

// var leapYears = age / 4
// var notLeapYears = age - leapYears

// var daysAlive = leapYears * 366 + notLeapYears * 365
// alert("Thats roughly " + daysAlive + " days!") 

// console.log("Your full name is " + firstName + " " + lastName);
// console.log("You are " + age + " years old");

if(age<0) {
	console.log("Error age is nevative")
}

if(age == 21) {
	console.log("Happy 21st Birthday!")
}

if(age % 2 != 0) {
	console.log("Your age is odd")
}


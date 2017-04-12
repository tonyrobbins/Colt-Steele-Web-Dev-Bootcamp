// // Print all numbers between -10 and 19

var num = -10

while(num<=19) {
	console.log(num);
	num++;
}

for(n = -10; n <= 19; n++) {
	console.log(num);
}

// // Print all even numbers between 10 and 40

var evenNum = 10

while(evenNum < 41) {
	if(evenNum % 2 === 0) {
		console.log(evenNum);
	}
	evenNum++;
}

for(e = 10; e < 41; e++) {
	if(e % 2 === 0) {
		console.log(e);
	}
}

// Print all odd numbers between 300 and 333

var oddNum = 300

while(oddNum < 334) {
	if(oddNum % 2 !== 0) {
		console.log(oddNum);
	}
	oddNum++;
}

for(o = 300; o < 334; o++) {
	if(o % 2 !== 0) {
		console.log(o);
	}
}

// // Print all numbers divisible by 5 AND 3 between 5 and 50.

var divNum = 5

while(divNum < 51) {
	if((divNum % 5 === 0) && (divNum % 3 === 0)) {
		console.log(divNum);
	}
	divNum++;
}

for(d = 5; d < 51; d++) {
if((d % 5 === 0) && (d % 3 === 0)) {
		console.log(d);
	}
}
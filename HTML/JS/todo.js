var todo = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	if (input === "new") {
		newTodo();
	} else if (input === "list") {
		listTodo();
	}	else if (input === "delete") {
		listDelete();
	}input = prompt("What would you like to do?");
}
console.log("Ok, you quit the application!")

function newTodo() {
	var newTodo = prompt("Add new Todo")
	todo.push(newTodo);
	console.log("Added Todo!")
}

function listTodo() {
	console.log("**********");
	todo.forEach(function(todo,i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function listDelete() {
	var toDelete = prompt("What index would you like to delete?")
	var check = prompt("Are you sure you want to delete index " 
	+ toDelete + "?")
	if (check === "yes") {
		todo.splice(toDelete,1);
		console.log("Deleted Todo!")
	}
	else if (check === "no") {
		console.log("Todo has not been deleted.");
	}
}
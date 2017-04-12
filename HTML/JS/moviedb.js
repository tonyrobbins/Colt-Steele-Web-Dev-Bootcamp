var movies = [
	{
		title: "Top Gun",
		stars: 5,
		haveSeen: true
	},
	{
		title: "The Accountant",
		stars: 4,
		haveSeen: false
	},
	{
		title: "Frozen",
		stars: 4.5,
		haveSeen: true
	},
	{
		title: "War Dogs",
		stars: 3.5,
		haveSeen: false
	}
]

			function movieDB(arr) {
			for(i      = 0; i < arr.length; i++) {
			var result = "You have ";
			if(arr[i].haveSeen) {
			result     += "watched ";
			} else {
			result     += "not seen ";
			} result   += "\"" + arr[i].title + "\" - ";
			result     += arr[i].stars + " stars";
			console.log(result)
			}
			}
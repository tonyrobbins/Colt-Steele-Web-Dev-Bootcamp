// Adding a new ToDo
$("input").keypress(function(){
	if(event.which === 13){
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
	}
})

// Check off To-Do's by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//  Click on trash can to delete To-Do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Toggle the add a new ToDo
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
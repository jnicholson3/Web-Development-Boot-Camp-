//check off todos by clicking on todo
$('ul').on("click", "li", function(){
    $(this).toggleClass("finished");
});

//Click on X to delete Todos
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Get val from input text
$('input[type="text"]').on("keypress", function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i>  </span>" + todoText + "</li>")
	}
})

//implement button plus functionality
$('.fa-plus').on("click", function(){
	$('input[type="text"]').fadeToggle();
});
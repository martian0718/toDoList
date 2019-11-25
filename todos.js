


//check off specific todos by clicking
//second argument is what is being worked on ("li")
$("ul").on("click", "li", function(){

    $(this).toggleClass("completed");

});

//click on X to delete the todos
$("ul").on("click", "span", function(event){
    //alert("clicked");
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //can't be same as the parent
    });
    event.stopPropagation();//stops the event from bubbling up, so it won't fire on li, body, and div
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //13 is the event code for enter
        var newTodo = $(this).val();
        //create a new li and add it to the ul
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + newTodo + "</li>"); //adds a new list item into the ul 
        $(this).val("");

    } 
       
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

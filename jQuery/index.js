$("h1").addClass("big-title margin-50");

$("button").html("<em>Dont click me wtf</em>");

$("h1").click(function() {
    $("h1").css("color", "purple");
})

$("button").click(function() {
    $("h1").css("color", "purple");
})

$(document).keydown(function(event){
    $("h1").text(event.key);
})



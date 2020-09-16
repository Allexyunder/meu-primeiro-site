
$(".invisible").slideUp();
$(".invisible").toggleClass("invisible");
$(".Subtitulos").click(function () {
    $("." + $(this).attr("id") + "-pg").slideToggle();
});

$("#barra-fixa-img").click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
 });

 $("#menu-click").fadeToggle(0);

$("#menu-click").click(function () {
    $("#menu-click").fadeToggle(100).delay(0).queue(function(){
        $("#menu-n-click").fadeToggle(100);
        $("#menu-n-click").dequeue();
    });
    $(".menu-box").slideToggle();
});
$("#menu-n-click").click(function () {
    $("#menu-n-click").fadeToggle(100).delay(0).queue(function(){
        $("#menu-click").fadeToggle(100);
        $("#menu-click").dequeue();
    });
    $(".menu-box").slideToggle();
});

$(".menu-box").slideToggle(0);

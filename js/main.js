// lading screen
$(document).ready(function () {
    $(".lds-spinner").fadeOut(500,function(){
        $("#loading").slideUp(500, function(){
            $("html").css("overflow","auto");
            $("#loading").remove();
        });
    })
});

//navbar background color
let homeOffset = $("#home").offset().top,
    aboutOffset = $("#about").offset().top,
    windowScroll= "";

$(window).scroll(function () {

 windowScroll = $(window).scrollTop();

    if (windowScroll > homeOffset){
    $(".navbar").css("backgroundColor","rgba(0,0,0,.9)");
    } 
    else{
        $(".navbar").css("backgroundColor","transparent");
    }
    console.log(windowScroll)
});

// scrollon behavior
$(".nav-link").click(function () {
     let linkhref= $(this).attr("href"),
         sectionOffset = $(linkhref).offset().top
$("html,body").animate({scrollTop:sectionOffset},2000)

});


// go to top
$(window).scroll(function(){

    if (windowScroll >= aboutOffset){
        $(".go-top").fadeIn(300);
    }
    else{
        $(".go-top").fadeOut(300);
    }

})

$(".go-top").click(function(){
    $("html,body").animate({scrollTop:"0"},1000)

})



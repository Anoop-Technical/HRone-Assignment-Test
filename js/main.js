$(document).ready(function () {
    $(".seeall_Leave").click(function () {
        $(".cu_toggle1").toggle("slow");
    });
    $(".seeall_initiative").click(function () {
        $(".cu_toggle2").toggle("slow");
    });
    $(".seeDetails").click(function () {
        $(".chair").toggle("slow");
    });
    $(".seeDetails2").click(function () {
        $(".yesterday").toggle("slow");
    });
    $(".c_more1").click(function () {
        $(".cmo1").toggle("slow");
    });
    $(".c_more2").click(function () {
        $(".cmo2").toggle("slow");
    });
    $(".c_more3").click(function () {
        $(".cmo3").toggle("slow");
    });
    $(".c_more4").click(function () {
        $(".cmo4").toggle("slow");
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $(".scroll_up").fadeIn();
        }else{
            $(".scroll_up").fadeOut();
        }
    });
    $(".scroll_up").click(function(){
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    })
});
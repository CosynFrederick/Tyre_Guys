$(document).ready(function(){
    
    const page_link = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    const current = "./"+page_link
    console.log(current);
    console.log($("a").attr("href"));
    $("nav ul li a").each(function() {
        if ($(this).attr("href") == current){
            console.log("test");
            $(".button",this).addClass("menuActive");
        };
    });
});
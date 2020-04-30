const navSlide = () => {
    const burger = document.querySelector('.burger');
    // const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        // nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if (link.style.animaton) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // burger.classList.toggle('toggle');

    });

}

navSlide();

$(document).ready(function(){
    $(".burger").click(function(){
        $(".blur").toggleClass("visible");
        $(".nav-links").toggleClass("nav-active");
        $(".burger").toggleClass("toggle");
    });
    window.onresize = function() {
        if (window.innerWidth >= 768) { 
            $(".blur").removeClass("visible"); 
        } else if (window.innerWidth < 768 && $("ul").hasClass("nav-active")) {
            $(".blur").addClass("visible"); 
        }
    }
});
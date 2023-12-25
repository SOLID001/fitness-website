
// this i did for the sticky navigation
document.addEventListener("DOMContentLoaded", function () {
    var fixedNav = document.getElementById("fixed-nav");


    window.onscroll = function () {
        // adjust the scroll height according to my preference
        var scrollHeight = 30;  //setting the scroll height

        // add the scrolled class to the navbar when scrolling down
        if (window.scrollY > scrollHeight) {
            fixedNav.classList.add("scrolled");
        }else {
            fixedNav.classList.remove("scrolled");
        }
    };
});

// HAMBUURGER EFFECT
document.addEventListener("DOMContentLoaded", function (){
    var hamburger = document.getElementById("hamburger");
    var mobileNav = document.getElementById("mobile-nav");

    hamburger.addEventListener("click", function (){
        mobileNav.classList.toggle("show-mobile-nav");
    });
});
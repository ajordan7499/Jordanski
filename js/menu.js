var open = document.getElementById('hamburger');
var item = document.querySelector('li a');

var overlay = document.querySelector('.overlay');
var nav = document.querySelector('nav');
var icon = document.querySelector('.menu-toggle i');
var header = document.querySelector('header');
var brandDesktop = document.querySelector('#mobile-logo');

var changeIcon = true;

open.addEventListener("click", function() {

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        header.classList.add("height-open");
        brandDesktop.classList.add("hide");
        brandDesktop.classList.remove("mobile-brand");

        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        header.classList.remove("height-open");
        brandDesktop.classList.remove("hide");
        brandDesktop.classList.add("mobile-brand");
        changeIcon = true;
    }

});

/*item.addEventListener("click", function() {

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (!changeIcon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        header.classList.remove("height-open");
        brandDesktop.classList.remove("hide");
        brandDesktop.classList.add("mobile-brand");
        changeIcon = true;
        console.log("Cierra");
    }
});*/
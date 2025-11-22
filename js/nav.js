
let i = 1;

function myfunction(){
    
    var element = document.getElementById("nav-toggle");
    var head = document.querySelector(".head");
    const body = document.body;

    if (i == 0) {
        element.classList.add("visility-false");
        element.classList.remove("visility-true");
        i = 1;
        head.style.overflowX = "hidden";
        body.style.overflow = "auto";
        // console.log("nav hidden")
    }

    else {
        element.classList.remove("visility-false");
        head.classList.remove("overflow");
        element.classList.add("visility-true");
        i = 0;
        head.style.overflowX = "visible";
        body.style.overflow = "hidden";
        // console.log("nav visible")
    }
}



// new code

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.replace('h-20', 'h-16');
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.replace('h-16', 'h-20');
    }
});

let i = 1;

function myfunction(){
    
    var element = document.getElementById("nav-toggle");
    var head = document.querySelector(".head");

    if (i == 0) {
        element.classList.add("visility-false");
        element.classList.remove("visility-true");
        i = 1;
        head.style.overflowX = "hidden";
        // console.log("nav hidden")

    }

    else {
        element.classList.remove("visility-false");
        head.classList.remove("overflow");
        element.classList.add("visility-true");
        i = 0;
        head.style.overflowX = "visible";
        // console.log("nav visible")
    }
}

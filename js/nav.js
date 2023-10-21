

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


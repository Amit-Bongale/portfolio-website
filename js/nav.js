// const btn = document.querySelector("#checkbox2");
// const menu = document.querySelector(".Menu")

// btn.addEventListener("onclick" , () => {
//     var element = document.getElementById("nav-toggle");

//     element.classList.remove("visility-false");
//     element.classList.add("visiblity-true")

//     console.log("tiggered")
// })


let i = 1;
function myfunction(){
    
    var element = document.getElementById("nav-toggle");
    head = document.querySelector(".head")

    if (i == 0){
        element.classList.add("visility-false");
        element.classList.remove("visility-true");
        i = 1;
        console.log("nav hidden")
        head.style.overflowX = "hidden";

    }

    else {
        element.classList.remove("visility-false");
        element.classList.add("visility-true");
        i = 0;
        console.log("nav visible")
        head.style.overflowX = "visible";
    }
}

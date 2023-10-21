const container = document.querySelector(".services");
const cursor = document.querySelector(".cursor")

container.addEventListener("mouseenter", () => {
    // console.log("Entered")
    cursor.style.opacity = "100%"
    cursor.style.scale = "1"

});

container.addEventListener("mouseleave", () => {
    // console.log("Exited")
    cursor.style.opacity = "0%"
    cursor.style.scale = "0"
});

container.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        left: dets.x,
        top: dets.y
    })
})
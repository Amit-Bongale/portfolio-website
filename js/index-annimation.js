
gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {
    y: "-100%",
    duration : 0.8,
    ease : "power1"
})

gsap.from(".mainpic",{
    x : '100%',
    duration: 1.5,
    ease: "power3"
});

gsap.from(".maintext",{
    x: "-100%",
    duration: 1.5,
    ease: "power3"

})

gsap.from(".services", {
    y: "20%",
    duration : 0.4
})

// gsap.from(".service-items", {
//     scrollTrigger: {
//         trigger : ".service-item",
//         start : "end" ,
//         markers : true , 
//         toggleAction: "restart none none restart"
//     },
//     x : "-100%",
//     duration: 2
// })
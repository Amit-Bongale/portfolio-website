const cards = document.querySelectorAll(".edu-card");

cards.forEach(card => {
    const slider = card.querySelector(".edu-txt")

    card.addEventListener("mouseenter", () => {
        console.log("Entered");
        slider.style.transform = "translateY(-85px)";
    });

    card.addEventListener("mouseleave", () => {
        console.log("leaved");
        slider.style.transform = "translateY(0px)";
    });
});
const cards = document.querySelectorAll(".edu-card");

cards.forEach(card => {
    const slider = card.querySelector(".edu-txt")

    card.addEventListener("mouseenter", () => {
        slider.style.transform = "translateY(-85px)";
    });

    card.addEventListener("mouseleave", () => {
        slider.style.transform = "translateY(0px)";
    });
});

const projcards = document.querySelectorAll(".proj-card");

projcards.forEach(card => {
    const slider = card.querySelector(".proj-txt")

    card.addEventListener("mouseenter", () => {
        slider.style.transform = "translateY(-130px)";
    });

    card.addEventListener("mouseleave", () => {
        slider.style.transform = "translateY(0px)";
    });
});
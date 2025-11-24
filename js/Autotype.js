// const words = ["A Motion Designer", "A Graphic Designer", "A Web Developer"];
const textContainer = document.getElementById("animatedText");

const words = ["Web Applications", "Motion Graphics", "Digital Experiences"];
// const textContainer = document.getElementById('typing-text')

let wordIndex = 0;

function showWord(word) {
  textContainer.innerHTML = "";
  const spans = [];

  // Create spans for each character
  [...word].forEach((char, i) => {
    const span = document.createElement("span");
    span.innerHTML = char === " " ? "&nbsp;" : char;
    span.style.animationDelay = `${i * 0.05}s`;
    textContainer.appendChild(span);
    spans.push(span);
  });

  // Total time for fadeIn (last character delay + animation duration)
  const inTime = (word.length - 1) * 100 + 2500;

  // Start fadeOut right after fadeIn ends
  setTimeout(() => {
    spans.reverse().forEach((span, i) => {
      // Reset animation so fadeOut triggers
      span.style.animation = "none";
      void span.offsetWidth; // Force reflow
      span.classList.add("fadeOutUp");
      span.style.animationDelay = `${i * 0.05}s`;
    });

    // After fadeOut ends, show next word
    const outTime = (word.length - 1) * 100 + 500;

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      showWord(words[wordIndex]);
    }, 200);
  }, inTime);
}

// Start
showWord(words[wordIndex]);


// const words = ["A Motion Designer", "A Graphic Designer", "A Web Developer"];
// const textContainer = document.getElementById("animatedText");

// let wordIndex = 0;

// function showWord(word) {

// textContainer.innerHTML = ""; // Clear previous word

// [...word].forEach((char, i) => {

//     const span = document.createElement("span");

//     if (char === " ") {
//         span.innerHTML = "&nbsp;"; // preserve space
//     } else {
//         span.textContent = char;
//     }
//     span.style.animationDelay = `${i * 0.05}s`; // delay per character
//     textContainer.appendChild(span);

// });

// // Move to next word after full animation
// const totalTime = word.length * 100 + 2500; // char animation + pause
// setTimeout(() => {
//     wordIndex = (wordIndex + 1) % words.length;
//     showWord(words[wordIndex]);
// }, totalTime);
// }

// // Start animation
// showWord(words[wordIndex]);



const words = ["A Motion Designer", "A Graphic Designer", "A Web Developer"];
const textContainer = document.getElementById("animatedText");

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
        span.style.animationDelay = `${i * 0.1}s`;
      });

      // After fadeOut ends, show next word
      const outTime = (word.length - 1) * 100 + 500;

      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        showWord(words[wordIndex]);
      }, outTime);
    }, inTime);
  }

  // Start
  showWord(words[wordIndex]);
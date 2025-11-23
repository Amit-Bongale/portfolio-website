const words = ["Web Applications", "Motion Graphics", "Brand Identities", "Digital Experiences"];
let i = 0;
let timer;

// The typing function — call it once (after DOM is ready)
function typeWriter() {
  const heading = document.getElementById('typing-text');
  if (!heading) return; // if element not present, don't crash

  const word = words[i];                  // use current word every call
  const currentText = heading.textContent || '';
  const deleting = heading.getAttribute('data-deleting') === 'true';

  if (!deleting) {
    // Typing
    if (currentText.length < word.length) {
      heading.textContent = word.slice(0, currentText.length + 1);
      timer = setTimeout(typeWriter, 100);
    } else {
      // finished typing -> wait, then start deleting
      heading.setAttribute('data-deleting', 'true');
      timer = setTimeout(typeWriter, 2000);
    }
  } else {
    // Deleting
    if (currentText.length > 0) {
      heading.textContent = currentText.slice(0, -1);
      timer = setTimeout(typeWriter, 50);
    } else {
      // finished deleting -> move to next word
      heading.removeAttribute('data-deleting');
      i = (i + 1) % words.length;
      timer = setTimeout(typeWriter, 500);
    }
  }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Ensure you have an element like: <span id="typing-text"></span>
  typeWriter();
});

const words = ["Web Applications", "Motion Graphics", "Brand Identities", "Digital Experiences"];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.getElementById('typing-text');
    const word = words[i];
    let currentText = heading.textContent;
    
    if (!heading.getAttribute('data-deleting')) {
        // Typing
        if (currentText.length < word.length) {
            heading.textContent = word.substring(0, currentText.length + 1);
            timer = setTimeout(typeWriter, 100);
        } else {
            heading.setAttribute('data-deleting', 'true');
            timer = setTimeout(typeWriter, 2000); // Wait before deleting
        }
    } else {
        // Deleting
        if (currentText.length > 0) {
            heading.textContent = word.substring(0, currentText.length - 1);
            timer = setTimeout(typeWriter, 50);
        } else {
            heading.removeAttribute('data-deleting');
            i = (i + 1) % words.length;
            timer = setTimeout(typeWriter, 500);
        }
    }
}
typeWriter();
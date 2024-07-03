// script.js
const texts = [
  "Software Engineer",
  "Web Developer",
  "UI / UX Designer",
  "Data Scientist",
  "Mobile Developer",
  "Machine Learning IT",
];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typewriterText = document.getElementById("animation-typing");

function type() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    typewriterText.textContent +=
      texts[currentTextIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentCharIndex > 0) {
    typewriterText.textContent = texts[currentTextIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(erase, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

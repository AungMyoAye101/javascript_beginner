document.addEventListener("DOMContentLoaded", () => {
  const text = "This is an example of word by word animation.";
  const words = text.split(" ");
  const container = document.getElementById("animated-text");

  let index = 0;

  function showNextWord() {
    if (index < words.length) {
      const word = document.createElement("span");
      word.textContent = words[index] + " ";
      container.appendChild(word);
      index++;
      setTimeout(showNextWord, 500); // Adjust the delay as needed
    }
  }

  showNextWord();
});

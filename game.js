const response = "This is a sample response from the AI chatbot.";
const promptWords = ["Write", "a", "haiku", "about", "the", "history", "of", "loafers."];

const promptBox = document.getElementById("promptBox");
const responseText = document.getElementById("responseText");
const guessInput = document.getElementById("guessInput");

function initializePrompt() {
    promptBox.innerHTML = promptWords.map(word => `<span class="hidden-word">${word}</span>`).join(' ');
}

function revealGuessedWords() {
    const playerGuess = guessInput.value.trim();
    const guessWords = playerGuess.split(' ');

    promptWords.forEach((word, index) => {
        if (index < guessWords.length) {
            const hiddenWord = promptBox.children[index];
            if (word.toLowerCase() === guessWords[index].toLowerCase()) {
                hiddenWord.classList.remove("hidden-word");
            }
        }
    });
}

function handleGuess() {
    revealGuessedWords();
    guessInput.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    initializePrompt();
});

function showInfo() {
    const infoDescription = document.getElementById("infoDescription");
    infoDescription.classList.toggle("visible");
}


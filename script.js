// Glitch Text Effect
function glitchText(element, originalText, interval = 150) {
    const glitchChars = "!@#$%^&*()_+{}[]<>?/|";
    let glitching = true;

    function randomChar() {
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }

    function startGlitch() {
        let textArray = originalText.split("");
        let glitchArray = textArray.map(() => (Math.random() > 0.5 ? randomChar() : " "));
        element.innerText = glitchArray.join("");

        setTimeout(() => {
            if (glitching) {
                element.innerText = originalText;
            }
        }, interval);
    }

    setInterval(startGlitch, interval * 2);
}

// Apply glitch effect to title
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    if (title) {
        glitchText(title, title.innerText, 250);
    }
});

// Blinking Terminal Cursor Effect
document.addEventListener("DOMContentLoaded", () => {
    const terminalText = document.querySelector(".blinking");
    if (terminalText) {
        setInterval(() => {
            terminalText.style.visibility = (terminalText.style.visibility === "hidden") ? "visible" : "hidden";
        }, 500);
    }
});

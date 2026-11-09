//your JS code here. If required.
const buttons = document.querySelector("#buttons");

const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn")) {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const soundName = e.target.dataset.sound;

        currentAudio = new Audio(`./sounds/${soundName}.mp3`);

        currentAudio.play();

    }

});

stopButton.addEventListener("click", () => {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});

import jquery from "./jquery";
import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js";

const easter_egg_left = document.getElementById('dot_left');
const easter_egg_right = document.getElementById('dot_right');

easter_egg_left.onclick = function() {
    confetti({ // # NOTE: read about configs in js and learn how this actually works
        particleCount: 150,
        angle: 45,
        origin: {
            x: 0,
            y: 0.5
        }
    })
};

easter_egg_right.onclick = function() {
    confetti({ // # NOTE: read about configs in js and learn how this actually works
        particleCount: 150,
        angle: -45,
        origin: {
            x: 1,
            y: 0.5
        }
    })
};
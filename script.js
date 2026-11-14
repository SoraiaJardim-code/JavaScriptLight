const bulbOnUrl ="Lampada-acesa.png";
const bulbOffUrl = "Lampada-apagada.png";

const bulbImage = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleBtn");

let isOn = false;

toggleButton.addEventListener("click", function() {
    if (isOn === false) {
        bulbImage.src = bulbOnUrl;
        toggleButton.textContent = "turn off";
        document.body.style.backgroundColor = "#fff9c4";
        isOn = true;

    
    } else {
        bulbImage.src = bulbOffUrl;
        toggleButton.textContent = "turn on";
        document.body.style.backgroundColor = "#222222";
        isOn = false;
    }
});
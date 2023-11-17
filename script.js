function showMessage() {
    const message = "Selamat atas keberhasilanmu, Faza! Semoga setiap langkahmu penuh dengan prestasi dan kebahagiaan.";
    document.getElementById("wisudaMessage").innerText = message;
}

const audio = document.getElementById("audio");

window.addEventListener("scroll", function() {
    const value = window.scrollY;
    audio.volume = value / 2000;
});

audio.play();

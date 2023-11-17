function showMessage() {
    const message = "Selamat atas keberhasilan Anda dalam menyelesaikan studi! Semoga masa depan penuh dengan kesuksesan dan kebahagiaan.";
    document.getElementById("wisudaMessage").innerText = message;
}

// Tambahkan script untuk mengontrol audio
const audio = document.getElementById("audio");

window.addEventListener("scroll", function() {
    const value = window.scrollY;
    audio.volume = value / 2000; // Sesuaikan dengan tingkat volume yang diinginkan
});

audio.play();
￼Enter

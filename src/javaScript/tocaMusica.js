const audioPlayer = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pausar";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Tocar";
    }
}

// Tocar automaticamente ao carregar a página
window.onload = function () {
    const startTime = 158; // Tempo inicial em segundos
    audioPlayer.currentTime = startTime;

    // Tentar tocar o áudio automaticamente
    audioPlayer.play().catch(error => {
        console.log("Autoplay bloqueado pelo navegador:", error);
    });
};

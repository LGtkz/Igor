const startTime = 157; // Altere este valor para o tempo desejado

function playAudio() {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = startTime; // Define o tempo inicial
    audio.play(); // Toca o áudio
}

// Opcional: tocar automaticamente ao carregar a página
window.onload = function() {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = startTime;
    audio.play().catch(error => {
        console.log("Autoplay bloqueado pelo navegador:", error);
    });
};
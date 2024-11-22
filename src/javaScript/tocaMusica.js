const startTime = 157; // Tempo inicial em segundos
const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

// Define o tempo inicial e tenta tocar o áudio
function playMusic() {
    audio.currentTime = startTime;
    audio.play().then(() => {
        console.log("Áudio tocando...");
        playButton.style.display = "none"; // Esconde o botão após iniciar
    }).catch(error => {
        console.log("Autoplay bloqueado. Clique no botão para iniciar.");
    });
}

// Tenta tocar automaticamente ao carregar a página
window.onload = function () {
    playAudio(); // Chama a função ao carregar
};

// Permite o usuário tocar manualmente
playButton.addEventListener('click', () => {
    playAudio();
});

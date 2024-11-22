const startTime = 156; // Tempo inicial da música (em segundos)
const delay = 3000; // Tempo de espera antes de tocar (em milissegundos, 5 segundos)

window.onload = function () {
    const audio = document.getElementById('audioPlayer');

    // Exibe o alerta para pedir permissão ao usuário
    const userConsent = confirm("Deseja escutar a música selecionada para este momento?");

    if (userConsent) {
        // Define o tempo inicial
        audio.currentTime = startTime;

        // Aguarda o tempo especificado antes de tocar a música
        setTimeout(() => {
            audio.play().then(() => {
                console.log("Música tocando após o delay.");
            }).catch(error => {
                console.log("Erro ao tocar a música:", error);
            });
        }, delay);
    } else {
        console.log("Usuário optou por não iniciar a música.");
    }
};

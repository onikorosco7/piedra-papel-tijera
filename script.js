/* script.js */
function jugar(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];
    let resultado = '';

    if (eleccionUsuario === eleccionMaquina) {
        resultado = '¡Empate! Ambos eligieron ' + eleccionUsuario;
    } else if (
        (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionMaquina === 'papel')
    ) {
        resultado = '¡Ganaste! ' + eleccionUsuario + ' vence a ' + eleccionMaquina;
        lanzarConfetti();
    } else {
        resultado = 'Perdiste 😢 ' + eleccionMaquina + ' vence a ' + eleccionUsuario;
    }
    
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerText = resultado;
    resultadoElemento.style.opacity = "1";
}

function lanzarConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 1.5 + 0.5 + 's';
        container.appendChild(confetti);
    }
    setTimeout(() => { container.innerHTML = ''; }, 2000);
}
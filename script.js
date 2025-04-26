/* script.js */
function jugar(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionMaquina = obtenerEleccionMaquina(opciones);
    const resultado = calcularResultado(eleccionUsuario, eleccionMaquina);

    mostrarResultado(resultado);
    if (resultado.ganador === 'usuario') {
        lanzarConfetti();
    }
}

function obtenerEleccionMaquina(opciones) {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function calcularResultado(eleccionUsuario, eleccionMaquina) {
    if (eleccionUsuario === eleccionMaquina) {
        return {
            mensaje: `¡Empate! Ambos eligieron ${eleccionUsuario}`,
            ganador: 'empate'
        };
    }

    const reglasDeGanador = {
        'piedra': 'tijera',
        'papel': 'piedra',
        'tijera': 'papel'
    };

    if (reglasDeGanador[eleccionUsuario] === eleccionMaquina) {
        return {
            mensaje: `¡Ganaste! ${eleccionUsuario} vence a ${eleccionMaquina}`,
            ganador: 'usuario'
        };
    } else {
        return {
            mensaje: `Perdiste 😢 ${eleccionMaquina} vence a ${eleccionUsuario}`,
            ganador: 'maquina'
        };
    }
}

function mostrarResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerText = resultado.mensaje;
    resultadoElemento.style.opacity = "1";
}

function lanzarConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) { // Aumenté la cantidad de confeti
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; // Variación de tiempo
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`; // Añadí rotación aleatoria

        container.appendChild(confetti);
    }

    // Limpia el confeti después de 2 segundos
    setTimeout(() => { container.innerHTML = ''; }, 2000);
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    jugar(boton.getAttribute('data-choice'));
  });
});

function jugar(eleccionJugador) {
  const opciones = ['piedra', 'papel', 'tijera'];
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  let mensaje = '';

  if (eleccionJugador === eleccionComputadora) {
    mensaje = `🤝 ¡Empate! Ambos eligieron ${eleccionJugador}.`;
  } else if (
    (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
    (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
    (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
  ) {
    mensaje = `🎉 ¡Ganaste! Elegiste ${eleccionJugador} y la computadora eligió ${eleccionComputadora}.`;
    lanzarConfetti();
  } else {
    mensaje = `💥 ¡Perdiste! Elegiste ${eleccionJugador} y la computadora eligió ${eleccionComputadora}.`;
  }

  resultado.textContent = mensaje;
}

function lanzarConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  confettiContainer.innerHTML = '';

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 3000);
}

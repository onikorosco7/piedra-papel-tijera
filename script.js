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

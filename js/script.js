const resultado = document.getElementById('resultado');
const contador = document.getElementById('contador');
const listaHistorial = document.getElementById('lista-historial');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

let victorias = 0, derrotas = 0, empates = 0, historial = [];
let modoDosJugadores = false;

function cambiarModo() {
  modoDosJugadores = !modoDosJugadores;
  document.getElementById('modo').textContent = modoDosJugadores ? 'Modo: 2 Jugadores' : 'Modo: 1 Jugador';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function jugar(eleccion) {
  let eleccion2;

  if (modoDosJugadores) {
    eleccion2 = prompt('Jugador 2: Elige piedra, papel o tijera');
    if (!['piedra', 'papel', 'tijera'].includes(eleccion2)) {
      alert('Elección inválida. Debe ser piedra, papel o tijera.');
      return;
    }
  } else {
    const opciones = ['piedra', 'papel', 'tijera'];
    eleccion2 = opciones[Math.floor(Math.random() * 3)];
  }

  let resultadoTexto = '';

  if (eleccion === eleccion2) {
    resultadoTexto = 'Empate';
    empates++;
    document.getElementById('sonidoEmpate').play();
  } else if (
    (eleccion === 'piedra' && eleccion2 === 'tijera') ||
    (eleccion === 'papel' && eleccion2 === 'piedra') ||
    (eleccion === 'tijera' && eleccion2 === 'papel')
  ) {
    resultadoTexto = '¡Ganaste!';
    victorias++;
    document.getElementById('sonidoVictoria').play();
    lanzarConfetti();
  } else {
    resultadoTexto = 'Perdiste';
    derrotas++;
    document.getElementById('sonidoDerrota').play();
  }

  historial.push(`${eleccion} vs ${eleccion2} → ${resultadoTexto}`);
  actualizarPantalla();
}

function actualizarPantalla() {
  resultado.textContent = historial[historial.length - 1] || 'Elige una opción';
  contador.textContent = `Victorias: ${victorias} | Derrotas: ${derrotas} | Empates: ${empates}`;
  listaHistorial.innerHTML = historial.map(res => `<li>${res}</li>`).join('');
}

function reiniciar() {
  victorias = 0;
  derrotas = 0;
  empates = 0;
  historial = [];
  actualizarPantalla();
  resultado.textContent = 'Elige una opción';
}

let confettis = [];

function lanzarConfetti() {
  for (let i = 0; i < 100; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 3 + 2,
    });
  }
  animarConfetti();
}

function animarConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettis.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.y += c.speed;
  });
  confettis = confettis.filter(c => c.y < canvas.height);
  if (confettis.length > 0) {
    requestAnimationFrame(animarConfetti);
  }
}
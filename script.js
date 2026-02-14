// Detectar si es dispositivo móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Crear pétalos animados
function createPetal() {
    const petals = document.querySelector('.petals');
    const petal = document.createElement('div');
    
    petal.style.position = 'fixed';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = '-10px';
    petal.style.fontSize = Math.random() * 20 + 15 + 'px';
    petal.style.pointerEvents = 'none';
    
    const symbols = ['🌸', '🌹', '💗', '✨', '🎀'];
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    const duration = Math.random() * 5 + 8;
    const randomX = (Math.random() - 0.5) * 60;
    
    petal.style.animation = `floatPetal ${duration}s linear forwards, swayPetal 2s ease-in-out infinite`;
    petal.style.setProperty('--random-x', randomX + 'px');
    
    petals.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Crear corazones que flotan
function createHearts() {
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.pointerEvents = 'none';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = '110%';
    
    const size = Math.random() * 25 + 15;
    heart.style.fontSize = size + 'px';
    heart.style.color = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.3) + ')';
    
    const duration = Math.random() * 3 + 7;
    heart.style.animation = `floatUp ${duration}s linear forwards`;
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Event listener para el botón
function handleClick() {
    const messages = [
        '¡Gracias por ser tan increíble, Esme! ✨',
        '¡Te quiero mucho! 💖',
        '¡Eres lo mejor que me pasó! 🌹',
        '¡Feliz día a la persona más especial! 💕',
        '¡Te amo con todo mi corazón! ❤️'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    
    // Crear muchos pétalos cuando se hace clic
    const petalCount = isMobile ? 5 : 10;
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            createPetal();
        }, i * 100);
    }
}

// Iniciar animaciones con velocidades diferentes según el dispositivo
if (isMobile) {
    // En móvil: reducir la frecuencia de animaciones
    setInterval(createPetal, 600);
    setInterval(createHearts, 500);
} else {
    // En desktop: velocidad normal
    setInterval(createPetal, 400);
    setInterval(createHearts, 300);
}

// Hacer que los pétalos sigan el movimiento del mouse (solo en desktop)
if (!isMobile) {
    document.addEventListener('mousemove', (e) => {
        const petals = document.querySelectorAll('.petals > div');
        petals.forEach(petal => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
            petal.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

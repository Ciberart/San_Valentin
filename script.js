
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


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


function handleClick() {
    const message = 'Te quiero mucho niña de ojos bonitos ✨';
    showModal(message);

    const petalCount = isMobile ? 5 : 10;
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            createPetal();
        }, i * 100);
    }
}

function showModal(message) {
    const modal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('messageModal');
    modal.classList.remove('active');
}


if (isMobile) {

    setInterval(createPetal, 600);
    setInterval(createHearts, 500);
} else {

    setInterval(createPetal, 400);
    setInterval(createHearts, 300);
}


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

// Cerrar modal al hacer click en el fondo
document.getElementById('messageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
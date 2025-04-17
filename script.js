const playlist = ['./audio/aa.mp3'];

let currentTrack = 0;
const music = document.getElementById('bg-music');
music.src = playlist[currentTrack];
music.play();

function toggleLove() {
    document.body.classList.toggle('dark-mode');
    if (music.paused) {
        music.play();
    }
    controlConfetti();
}

// Simple Confetti Effect
const confettiContainer = document.getElementById('confetti');
let confettos = [];

for (let i = 0; i < 100; i++) {
    let confetto = document.createElement('div');
    confetto.style.position = 'absolute';
    confetto.style.width = '10px';
    confetto.style.height = '10px';
    confetto.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confetto.style.left = Math.random() * window.innerWidth + 'px';
    confetto.style.top = -10 + 'px';
    confetto.style.opacity = 0.8;
    confetto.style.borderRadius = '50%';

    confettiContainer.appendChild(confetto);

    let fall = confetto.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        iterations: Infinity,
        delay: Math.random() * 5000
    });

    confettos.push(fall);
}

function controlConfetti() {
    const isDark = document.body.classList.contains('dark-mode');
    confettos.forEach(anim => {
        if (isDark) {
            anim.play();
        } else {
            anim.pause();
        }
    });
}

if (!document.body.classList.contains('dark-mode')) {
    controlConfetti();
}

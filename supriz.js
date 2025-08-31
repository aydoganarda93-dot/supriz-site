// JavaScript for the surprise page

// Get all necessary elements from the DOM
const playButton = document.getElementById('play-video-button');
const birthdayVideo = document.getElementById('birthday-video');
const effectsContainer = document.getElementById('effects');
const centerMessage = document.querySelector('.center-message');

const sozlerDiv = document.getElementById("sozler");

// Array of messages to display
const messages = [
  "Sen benim en güzel tesadüfümsün 🌸",
  "Hayatıma anlam katan en değerli şey sensin 💫",
  "Sonsuza kadar sen ❤️"
];

// Function to handle the video playback when the button is clicked
if (playButton && birthdayVideo) {
  playButton.addEventListener('click', () => {
    // Unmute the video
    birthdayVideo.muted = false;
    // Play the video
    birthdayVideo.play();
    // Hide the button
    playButton.style.display = 'none';
  });
}

// Function to show a random message at a random time
let index = 0;
setInterval(() => {
  index = (index + 1) % messages.length;
  sozlerDiv.innerText = messages[index];
}, 4000);


// Kalp ve yıldız animasyonları için tek fonksiyon
const effects = document.getElementById("effects");
function createFloatingEffect(symbol, sizeRange, duration) {
  const elem = document.createElement("div");
  elem.innerText = symbol;
  const size = Math.random() * sizeRange + sizeRange / 2;
  elem.style.fontSize = size + "px";
  elem.style.position = "absolute";
  elem.style.left = Math.random() * window.innerWidth + "px";
  elem.style.top = window.innerHeight + "px";
  elem.style.opacity = 0.7;
  elem.style.transition = `all ${duration}s linear`;
  effects.appendChild(elem);
  setTimeout(() => {
    elem.style.top = "-50px";
    elem.style.opacity = 0;
  }, 50);
  setTimeout(() => {
    effects.removeChild(elem);
  }, duration * 1000);
}

// Animasyonları tek yerden başlat
setInterval(() => createFloatingEffect("❤️", 24, 4), 800);
setInterval(() => createFloatingEffect("⭐", 18, 5), 1200);

// Gül yaprağı animasyon fonksiyonu
function createRosePetal() {
  const petal = document.createElement("div");
  petal.innerText = "🌹";
  petal.style.position = "absolute";
  petal.style.fontSize = (Math.random() * 20 + 15) + "px";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.top = "-20px";
  petal.style.opacity = 0.8;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  petal.style.transition = "all " + (Math.random() * 5 + 7) + "s linear";
  effects.appendChild(petal);

  setTimeout(() => {
    petal.style.top = window.innerHeight + "px";
    petal.style.left = parseFloat(petal.style.left) + (Math.random() * 200 - 100) + "px";
    petal.style.opacity = 0;
  }, 100);

  setTimeout(() => {
    effects.removeChild(petal);
  }, 8000);
}

// Her 1.5 saniyede bir gül yaprağı oluştur
setInterval(createRosePetal, 1500);

// Function to create and animate shooting stars
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.5; // Starts in the upper half
  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;
  
  // Set a random delay for the animation
  star.style.animationDelay = `${Math.random() * 5}s`;

  document.body.appendChild(star);
  
  // Remove the star element after its animation is complete
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// Create shooting stars at regular intervals
setInterval(createShootingStar, 3000);

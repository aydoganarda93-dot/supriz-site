const messages = [
  "Sen benim en güzel tesadüfümsün 🌸",
  "Hayatıma anlam katan en değerli şey sensin 💫",
  "Sonsuza kadar sen ❤️"
];
let index = 0;
const sozlerDiv = document.getElementById("sozler");
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
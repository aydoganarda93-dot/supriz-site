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
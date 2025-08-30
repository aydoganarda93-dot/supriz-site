// ----------------- index.html -----------------
function checkPassword() {
  const pass = document.getElementById("password")?.value;
  if(!pass) return;
  const correctPassword = "askim";
  if(pass === correctPassword){
    window.location.href = "loading.html";
  } else {
    alert("Yanlış şifre! 🙈");
  }
}

// ----------------- loading.html -----------------
if (window.location.pathname.endsWith('loading.html')) {
  setTimeout(() => {
    window.location.href = "supriz.html";
  }, 3000);
}

// ----------------- supriz.html -----------------
if (window.location.pathname.endsWith('supriz.html')) {
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

  // Kalp ve yıldız animasyonu
  const effects = document.getElementById("effects");
  function createFloatingEffect(symbol, sizeRange, duration) {
  const elem = document.createElement("div");
  elem.innerText = symbol;
  const size = Math.random()*sizeRange + sizeRange/2;
  elem.style.fontSize = size + "px";
  elem.style.position = "absolute";
  elem.style.left = Math.random()*window.innerWidth + "px";
  elem.style.top = window.innerHeight + "px";
  elem.style.opacity = 0.7;
  elem.style.transition = `all ${duration}s linear`;
  effects.appendChild(elem);
  setTimeout(() => { elem.style.top = "-50px"; elem.style.opacity = 0; }, 50);
  setTimeout(() => { effects.removeChild(elem); }, duration*1000);
}
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.fontSize = (Math.random()*24+12)+"px";
    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.top = window.innerHeight+"px";
    heart.style.opacity = 0.7;
    heart.style.transition = "all 4s linear";
    effects.appendChild(heart);
    setTimeout(() => {
      heart.style.top = "-50px";
      heart.style.opacity = 0;
    }, 50);
    setTimeout(() => effects.removeChild(heart), 4000);
  }, 800);
  setInterval(() => createFloatingEffect("❤️", 24, 4), 800);
  setInterval(() => createFloatingEffect("⭐", 18, 5), 1200); 
  setInterval(() => {
    const star = document.createElement("div");
    star.innerText = "⭐";
    star.style.position = "absolute";
    star.style.fontSize = (Math.random()*18+8)+"px";
    star.style.left = Math.random()*window.innerWidth+"px";
    star.style.top = window.innerHeight+"px";
    star.style.opacity = 0.6;
    star.style.transition = "all 5s linear";
    effects.appendChild(star);
    setTimeout(() => {
      star.style.top = "-50px";
      star.style.opacity = 0;
    }, 50);
    setTimeout(() => effects.removeChild(star), 5000);
  }, 1200);
}

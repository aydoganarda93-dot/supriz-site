console.log("main.js yüklendi!");
// ----------------- index.html -----------------
function checkPassword() {
  const pass = document.getElementById("password")?.value;
  if(!pass) return;

  const correctPassword = "askim"; // Şifreyi buradan kolay değiştirebilirsin

  if(pass === correctPassword){
    window.location.href = "loading.html";
  } else {
    alert("Yanlış şifre! 🙈");
  }
}

// ----------------- loading.html -----------------
if (window.location.pathname.endsWith('loading.html')) {
  setTimeout(() => {
    window.location.href = "surpriz.html";
  }, 3000); // 3 saniye sonra yönlendir
}

// ----------------- surpriz.html -----------------
if (window.location.pathname.endsWith('surpriz.html')) {
  let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
  let sozler = [
    "Sen benim en güzel tesadüfümsün 🌸",
    "Hayatıma anlam katan en değerli şey sensin 💫",
    "Sonsuza kadar sen ❤️"
  ];
  let index = 0;

  function show() {
    const photo = document.getElementById("photo");
    const soz = document.getElementById("sozler");
    if(photo && soz){
      photo.src = images[index];
      soz.innerText = sozler[index % sozler.length];
    }
  }

  window.nextImg = function() {
    index = (index + 1) % images.length;
    show();
  }

  window.prevImg = function() {
    index = (index - 1 + images.length) % images.length;
    show();
  }

  show();
  // opsiyonel: otomatik slayt geçişi
  // setInterval(nextImg, 4000);
}

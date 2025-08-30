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
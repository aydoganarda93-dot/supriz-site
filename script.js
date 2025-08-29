const correctPassword = "aşkım123"; // Şifre

function checkPassword() {
    const input = document.getElementById("pass").value;
    const message = document.getElementById("message");
    if(input === correctPassword){
        message.style.display = "block";

        // Konfeti ve kalpler
        for(let i=0;i<100;i++){
            let div = document.createElement("div");
            div.classList.add("confetti");
            div.style.left = Math.random() * window.innerWidth + "px";
            div.style.background = ['#ff69b4','#ff1493','#ffb6c1','#ff4500','#ff6347'][Math.floor(Math.random()*5)];
            document.body.appendChild(div);
        }

    } else {
        alert("Şifre yanlış 😢");
    }
}

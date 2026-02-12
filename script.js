function nextPage() {
  window.location.href = "page2.html";
}

function nextPage2() {
  window.location.href = "page3.html";
}

function showMessage() {
  const notif = document.getElementById("topNotification");
  notif.classList.add("show");

  launchLoveConfetti();

  setTimeout(() => {
    notif.classList.remove("show");
  }, 4000);
}



/* Floating emoji generator */
const emojis = ["💗","🤍","🌸","🧸","💕"];

function createFloating() {
  const el = document.createElement("div");
  el.classList.add("floating");
  el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = (6 + Math.random() * 6) + "s";
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 10000);
}

setInterval(createFloating, 1500);

/* LOVE Confetti Explosion */
function launchLoveConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("love-confetti");
    confetti.innerHTML = "💖";

    const x = (Math.random() - 0.5) * 600 + "px";
    const y = (Math.random() - 0.5) * 600 + "px";

    confetti.style.setProperty("--x", x);
    confetti.style.setProperty("--y", y);

    confetti.style.left = "50%";
    confetti.style.top = "50%";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 1800);
  }
}

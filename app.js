const d = document.querySelector("#days");
const h = document.querySelector("#hours");
const m = document.querySelector("#minutes");
const s = document.querySelector("#seconds");

function getTime() {
  const currTime = new Date();
  const bengalsWin = new Date("January 6, 1991 15:45:00");

  const diff = currTime.getTime() - bengalsWin.getTime();

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  d.innerHTML = days;
  h.innerHTML = hours;
  m.innerHTML = minutes;
  s.innerHTML = seconds;
}

setInterval(getTime, 1000);

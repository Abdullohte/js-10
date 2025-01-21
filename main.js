const username = prompt("ismingizni kiriting");
const color = prompt("yozigi rangini kiriting");
const bg = prompt("bodyni rangini kiriting");

const sd = document.createElement("h1");
sd.textContent = username;
sd.style.color = color;
sd.style.textAlign = "center";
document.body.style.backgroundColor = bg;
document.body.appendChild(sd);
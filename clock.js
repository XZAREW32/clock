let isim = prompt("Lütfen adınızı giriniz.")
document.getElementById("myName").innerHTML = isim;

const clock = new Date();


setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("myClock").innerHTML = date.toLocaleTimeString();
}
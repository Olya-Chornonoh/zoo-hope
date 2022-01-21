'use strict';

let time = 2 * 60 * 60;

let timer = setInterval(function () {
  let countdown = document.getElementById('countdown');

  let seconds = Math.trunc(time % 60).toString().padStart(2, '0');
  let minutes = Math.trunc(time / 60 % 60).toString().padStart(2, '0');
  let hour = Math.trunc(time / 60 / 60 % 60).toString();

  if (time <= 0) {
    clearInterval(timer);
    alert("Время закончилось");
  } else {
    let strTimer = `${hour}:${minutes}:${seconds}`;
    countdown.textContent = strTimer;
  }

  --time;
}, 1000);

window.onload = function() {
  let orderDate = document.getElementById('order-date');

  let today = new Date();

  let date = today.getDate().toString().padStart(2, '0') + '.' + (today.getMonth() + 1).toString().padStart(2, '0') + '.' + today.getFullYear();

  orderDate.textContent = 'Order date: ' + date;
}

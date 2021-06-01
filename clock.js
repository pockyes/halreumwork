let title = document.querySelector("#title");

let CLICKED_CLASS = 'clicked';

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

let clockContainer = document.querySelector(".js-clock");
let clockTitle = clockContainer.querySelector("h3");

function getDay() {
  let d = new Date();
  let week = new Array('일', '월', '화', '수', '목', '금', '토');
  document.write('오늘은 ' + week[d.getDay()] + '요일입니다!' + '<br />');
}

function getTime() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  title.addEventListener("click", handleClick);
  getDay();
  getTime();
  setInterval(getTime, 1000);
}
init();


let title = document.querySelector("#title");

let CLICKED_CLASS = 'clicked';

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

let clockContainer = document.querySelector(".js-clock");
let clockTitle = clockContainer.querySelector("h1");

function getTime() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  // title.addEventListener("click", handleClick);
  getTime();

}
init();


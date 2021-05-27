let form = document.querySelector(".js-form");
let input = form.querySelector("input");
let gretting = document.querySelector(".js-grettings");

let USER_LS = "currentUser";
let SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
  let currentValue = input.value;
  paintGretting(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `환영합니다 ${text} 님`;
}

function loadName() {
  let currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is 
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
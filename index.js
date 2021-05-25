// let ask = prompt("Ask Something");


// if(ask.length > 30) {
//   console.log("말이 많아");
// } else if(20 < ask.length && ask.length < 30) {
//   console.log("딱좋다");
// } else {
//   console.log("말좀해");
// }

let title = document.querySelector("#title");

let BASE_COLOR = "#000000";
let OTHER_COLOR = "#81ecec";

function handleClick() {
  console.log(title.style.color);
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();


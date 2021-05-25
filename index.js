// let ask = prompt("Ask Something");


// if(ask.length > 30) {
//   console.log("말이 많아");
// } else if(20 < ask.length && ask.length < 30) {
//   console.log("딱좋다");
// } else {
//   console.log("말좀해");
// }

let title = document.querySelector("#title");

let BASE_COLOR = "rgb(0, 0, 0)";
let OTHER_COLOR = "#55efc4";

function handleClick() {
  let currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();


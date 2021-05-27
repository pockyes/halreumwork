let toDoForm = document.querySelector(".js-toDoForm");
let toDoInput = toDoForm.querySelector("input");
let toDoList = document.querySelector(".js-toDoList");

let TODOS_LS = 'toDos';

function paintToDo(text) {
  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  let span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  let currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  let toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {

  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
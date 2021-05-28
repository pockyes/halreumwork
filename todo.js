let toDoForm = document.querySelector(".js-toDoForm");
let toDoInput = toDoForm.querySelector("input");
let toDoList = document.querySelector(".js-toDoList");

let TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  let btn = event.target;
  let li = btn.parentNode;
  toDoList.removeChild(li);
  let cleanToDos = toDos.filter(function(toDo){
    console.log(toDo.id);
    console.log(li.id);
    return parseInt(toDo.id) !== li.id;
  });
  console.log(cleanToDos);

}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  let span = document.createElement("span");
  let newId = toDos.length + 1;


  delBtn.innerText = "X"; 
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId;

  let toDoObj = {
    text: text, 
    id: toDos.length + 1
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  let currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  let loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    let parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDO){
      paintToDo(toDO.text);
    })
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
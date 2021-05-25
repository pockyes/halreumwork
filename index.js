let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let Info = {
  name: "areum",
  age: 28,
  gender: "Female",
  favMovies: ["센과 치히로의 행방불명", "원더", "500일의 썸머"],
  favFood: [
    {
      name: "maratang", 
      fatty: false
    }, 
    {
      name: "bulgogi Bugger", 
      fatty: true
    }
  ]
}


function sayHello(myName, age) {
 return `Hello! ${myName} How old? ${age}`;
}

sayHello("아름", 28);
let daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

let Info = {
  name: "areum",
  age: 28,
  gender: "Female",
  favMovies: ["센과 치히로의 행방불명", "원더", "500일의 썸머"],
  favFood: [
    {
      name: "maratang", 
      fatty: fals
    }, 
    {
      name: "bulgogi Bugger", 
      fatty: true
    }
  ]
}

console.log(Info.favFood);

Info.age = 27;

console.log(Info.age);
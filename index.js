let ask = prompt("Ask Something");


if(ask.length > 30) {
  console.log("말이 많아");
} else if(20 < ask.length && ask.length < 30) {
  console.log("딱좋다");
} else {
  console.log("말좀해");
}
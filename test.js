
function reversedStr(str) {
  let reversed = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversed += str[i];
}
    return reversed;
}

reversed = reversedStr("가나다라 마바사");
console.log(reversed);


function reverseString(s){
  let reverseStr = s.split("");
  reverseStr.reverse();
  return reverseStr.join("");
}

reverseStr = reverseString("가 나다라 마바");
console.log(reverseStr);
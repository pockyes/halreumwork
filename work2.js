let user = {};

user = {
name: "John",
surname: "Smith"
};

user.name = "Pete";

delete user.name;

console.log(user);


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log('sum >> ', sum);


// 객체 obj 의 프로퍼티 값이 숫자인 경우 그 값을 두 배로 만들어 주는 함수 multiplyNumeric(obj)를 생성해라.


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj){
  for(let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

console.log('obj >>', obj);
console.log('menu >>', menu);
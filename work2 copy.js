// 객체 obj 의 프로퍼티 값이 숫자인 경우 그 값을 두 배로 만들어 주는 함수 multiplyNumeric(obj)를 생성해라.


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log('menu >>', menu);

function multiplyNumeric(obj){
  for(let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log('menu >>', menu);


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log('height >> ', user.sizes);

let str = 'Hello';

str.test = 5;

console.log('str >> ', str.test);





function unique(arr){
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    
  }
}

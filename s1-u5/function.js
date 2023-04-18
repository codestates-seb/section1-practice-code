// function.js

// 함수 선언문
// 변수와 함수 각각에 맞는 키워드를 쓰면 선언 () 변수는 let, 함수는 function
function multiplyBy2(input) {
  input = input * 2;
  return input;
}

// 함수는 "작은 기능의 단위"입니다.
  // A => B 로직, 논리
// 그 기능을 실행시키고 싶다면 '호출'해야 합니다.

// 6번 문제
function returnWordWithJoy(word) {
  // word => 매개변수, 파라미터(parameter)
  if (typeof word !== 'string') {
    // 반환값, 리턴값
      return 'wrong type'; 
  } else {
      return word + '!';
  }
};

// 전달인자 === "I love coding"
let result = returnWordWithJoy("I love coding");
console.log(result)

function 구구단(num) {
  console.log(num * 1) 
  console.log(num * 2) 
  console.log(num * 3)
  console.log(num * 4)
  console.log(num * 5)
  console.log(num * 6)
  console.log(num * 7)
  console.log(num * 8)
  console.log(num * 9)
}

구구단(3);

function mulTablePrinterIterable (num) {
  for(let i = 2; i <= num; i++) {
      for(let j = 1; j <= num; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
      }
  }
}

// 처음 개발하는 사람들의 통곡의 벽

// JavaScript에는 ( )개의 데이터 타입이 있다.
// number, string, boolean, undefined, null, symbol, object
  // 문법 syntax
  // => 논란의 여지가 없고 암기하는게 편하다.

// 이중에서 object는 참조 자료형으로 따로 분류 (Unit9, Unit10에서 자세히 다룰 예정)
// symbol은 아직 알 필요가 없습니다.
// ! number, string, boolean
// 에 대해서 잘 알고
// undefined와 null을 잘 구분할 수 있으면 됩니다.

// 1. number type
// JavaScript에서는 숫자는 모두 number type => 정수, 소수, 실수, n진법 구분 없음
// 실수, 소수 .. number type
let pi = 3.141592;
let hex = 0x41; // 16진수
// console.log(hex);
console.log(typeof hex);
console.log(typeof 12312094810);

// 2. string type (문자열) -> 내일 더 자세히 배웁니다!
// 문자열은 ''(작은따옴표), ""(큰따옴표), ``(백틱)으로 감싼 값입니다.
// 가장 일반적으로 '', ''안에 따옴표를 넣어야 할 때는 "", 템플릿 리터럴 사용시 ``

// "안녕하세요"
// '안녕하세요'
// `안녕하세요`

let company = 'codestate';
let string = 'He said, "Good Luck!"';
let backtick = `He said, "Good Luck!"`;
let template = '2938기!';

// 템플릿 리터럴
// console.log(`Hello! ${template}`)

// let cohort = 45;
// console.log(`Hello! ${cohort}기`)
// console.log('Hello! ' + cohort + '기')

// 템플릿 리터럴에서는 줄바꿈과 공백이 허용됩니다.
// let greeting = `
//     안녕하세요.
//     저는 코드스테이츠 교육엔지니어
//     김코딩입니다.
// `

// let greeting = '
//     안녕하세요.
//     저는 코드스테이츠 교육엔지니어
//     김코딩입니다.
// '

// 3. Boolean type
// true와 false값만 존재합니다.

// 홍식이는 하이볼을 좋아합니다.
let isHongShikLikeHighball = true;

// 홍식이는 식혜를 좋아합니다.
let isHongShikLike식혜 = false;

console.log(1 === '1'); // boolean 값으로 평가됩니다.
console.log(0 === false);
console.log(!true);
console.log(!isHongShikLikeHighball);

console.log(5 < 6) 
console.log(5 > 6) 

// 4. undefined
// 개발자가 어? 까먹었다~~
let word;
console.log(word);

// 5. null
// 텅 빈게 맞는데, 변수에 값이 없다는 것을 명시적으로 사용할 때


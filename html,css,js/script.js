let obj = {name:"철수", age:"20"};
for(let key in obj){
	console.log(key + ": " + obj[key]);
}

let arr = ["orange", "banana", "apple"];
for(let index in arr){
	console.log(index + ": " + arr[index]);
}

const gugudan = () => {
    for(let i =1; i<=9; i++){
        console.log(`3*${i} = ${3*i}`);
    }
};
gugudan();

function sum1(num1, num2){
    let result = num1 + num2;
    console.log("inner: " + result);
}
sum1(10,20);

// function sum(num1, num2){
//     let result = num1 + num2;
// }
// sum(10,20);
// console.log("out: " + result); //ReferenceError: result is not defined

function sum2(num1, num2){
    let result = num1 + num2;
    return result;
}
const result = sum2(10,20);
console.log("out: " + result); 

let a = 10; //전역 스코프
function sum3(){
	console.log(`함수 내부: ${a}`);
}
sum3();
console.log(`함수 외부: ${a}`);

// var printHello;
// printHello();
// printHello = function printHello(){
// 	console.log("Hello");
// }

// var text = "outside";
// function printScope(){
//     console.log(text);
//     var text = "inside";
// };
// printScope();

(function init(){
    console.log("initialized!");
})(); 
// init();

console.log("----------------------------");

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0];


// for (let i =0; i< str.length; i++){
//     if(str[i] === str[i].toUpperCase()){
//         input.push(str[i].toLowerCase());
//     }else{
//         input.push(str[i].toUpperCase());
//     }
// }
    
// });

console.log("----------------------------");

let num=10;
let copyNum = num;
num=20;
console.log(num);   //20
console.log(copyNum);   //10 
//변수 num만 값이 변경되고 변수 copyNum은 변경되지 않음
//변수 copyNum은 변수 num의 값을 복사한 별도의 데이터를 가지고 있기 때문
//즉 두 데이터는 연동되어 있지 않음

console.log("----------------------------");

const person = {
    name: "kyeon"
};
const copyPerson = person;
person.name = "KYU";
console.log(person.name);   //KYU
console.log(copyPerson.name);   //KYU
//person에 할당된 객체의 속성값을 변경했는데 변수 copyPerson에 복사된 객체의 속성값까지 변경됨
//객체가 변수에 할당될 때 변수는 주소 값만 가지고 있어서 복사할 때도 주소 값만 복사하기 때문
//그래서 두 변수는 같은 주소 값을 가지게 되고 바라보는 원본 데이터의 위치도 같음

const random = Math.random();
console.log(random);

function getMaxRandom(max){
    return Math.floor(Math.random()*max)+1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom); //0이상 20 이하의 무작위 정수
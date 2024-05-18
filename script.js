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

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];


for (let i =0; i< str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        input.push(str[i].toLowerCase());
    }else{
        input.push(str[i].toUpperCase());
    }
}
    
});
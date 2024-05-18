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

function sum(num1, num2){
    let result = num1 + num2;
    return result;
}
const result = sum(10,20);
console.log("out: " + result); 
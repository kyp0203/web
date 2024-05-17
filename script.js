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
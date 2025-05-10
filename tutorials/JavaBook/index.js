//string: let fullName = "zacHawkins";
//number value: let age = 16;
//boolean: let isStudent = true;

//writing the variables onto page:
//document.getElementById("p1").textContent = fullName;
//document.getElementById("p2").textContent = age;
//document.getElementById("p3").textContent = isStudent;

//arithmetic functions:
//let students = 30;
//students += 1;
//students -= 1;
//students *= 1;
//students /= 1;
//squared: students **= 1;
//modulus: students %=2;
//quick add 1: students++;
//quick take 1: students--;

//window pops up and ask you, you answer and console responds
//let username = window.prompt("whats ur username?");
//console.log(username);

//detecting click:
//document.getElementById("mySubmit").onclick = function(){

//defining value of "username":
//    username = document.getElementById("myText").value;

//result:
//    document.getElementById("myH1").textContent = `hello ${username}`
//}

//string:
//let age = window.prompt("how old are you?");
//age+=1;
//console.log(age);

//string converted into number value:
//let age = window.prompt("how old are you?");
//age = Number(age);
//age+=1;
//console.log(age, "this is a", typeof age);

//more conversions:
//let x = "pizza";
//let y = "pizza";
//let z = "pizza";

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z); 

//const = variables that cant be influenced

//button counter:
//const increaseBtn = document.getElementById("increaseBtn");
//const resetBtn = document.getElementById("resetBtn");
//const decreaseBtn = document.getElementById("decreaseBtn");
//const countLabel = document.getElementById("countLabel");

//let count = 0;

//increaseBtn.onclick = function(){
    //count++;
    //countLabel.textContent = count;
//}

//resetBtn.onclick = function(){
    //count = 0;
    //countLabel.textContent = count;
//}

//decreaseBtn.onclick = function(){
    //count--;
    //countLabel.textContent = count;
//}

//MATHS!!!! YAYY!!!!🤓
//Math.PI 
//Math.E Eulers Number
//Math.round(x); rounds the number
//Math.floor(x); always rounds down
//Math.ceil(x); always rounds up
//Math.trunc(x); just gets rid of the decimals
//Math.pow(x, y); x to the power of y
//Math.sqrt(x); square root of x
//Math.log(x); natural logarithm
//Math.sin(x); sin x
//Math.cos(x); cos x
//Math.tan(x); tan x
//Math.abs(x); positive version of x (if x is negative)
//Math.sign(x); 
//let max = Math.max(x, y, z); finds largest in a set of numbers
//let min = Math.min(x, y, z); finds smallest in a set of numbers
//Math.random() * 100; creates random real number between 1 and 100 (exclusive) (for inclusive you just + 1)
//Math.floor(Math.random() * 100); same but without decimals

const button1 = document.getElementById("button1");
const label1 = document.getElementById("label1");
let randomNum = 0;

button1.onclick = function(){
    randomNum = Math.round (Math.random() * 100) + 1; 
    label1.textContent = randomNum;
}

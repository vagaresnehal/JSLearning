
console.log(`===================================================step1====================================================================`);
function greatorNumber(num1,num2){
  var result = num1 > num2 ? num1 : num2;
  console.log(`Greatest Number is :${result}`);
}
greatorNumber(10,-10);
greatorNumber(800,899);

console.log(`====================================================step2==========================================================`);
function isEvenOrOddNum(myNum){
        var result1 = myNum%2==0 ?"true" : "false";
        return result1;
}
var resultReturn = isEvenOrOddNum(29);
console.log(`Is Number 29 is Even : ${resultReturn} `);
var resultReturn = isEvenOrOddNum(44);
console.log(`Is Number 44 is Even : ${resultReturn} `);
var resultReturn = isEvenOrOddNum(0);
console.log(`Is Number 0 is Even : ${resultReturn} `);
var resultReturn =isEvenOrOddNum(101);
console.log(`Is Number 101 is Even : ${resultReturn} `);

console.log(`=====================================================step3=================================================`);
function wordLength(word){
var result = word.length%2==0? "EVEN":"ODD";
return result;
}
var res = wordLength(`JvaScript`);
console.log(`The Length Of Word "JavaScript" is: ${res}`);
var res = wordLength(`Developer`);
console.log(`The Length Of Word "Developer" is: ${res}`);
var res = wordLength(`Google`);
console.log(`The Length Of Word "Google" is: ${res}`);

console.log(`=======================================================END==================================================`);








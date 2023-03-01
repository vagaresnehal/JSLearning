console.log(`===========================================step1:For Greatest number================================================================`);

function greatestNumber(num1,num2){
    if (num1>num2) {
        console.log(`Greatest number is:`);
        console.log(`${num1} is Greater than ${num2}`);
        
    } else {
        console.log(`${num2} is greater than ${num1}`);
    }
}
greatestNumber(10,-10);
greatestNumber(800,899);

console.log(`=============================================step2:For EVEN And ODD Number========================================================`);
function isEvenOrOddNumber(num1) {
    if (num1 %2 == 0) {
        return "True";
    } else {
        return "False";
    }

}
var result = isEvenOrOddNumber(29);
console.log(`Given Number "29" is EVEN: ${result}`);
var result = isEvenOrOddNumber(44);
console.log(`Given Number "44" is EVEN : ${result}`);
var result = isEvenOrOddNumber(0);
console.log(`Given Number "0" is EVEN : ${result}`);
var result = isEvenOrOddNumber(101);
console.log(`Given Number "101" is EVEN : ${result}`);

console.log(`======================================================step3:WordLength is EVEN or ODD===============================================`);

function WordLength(word){
    if (word.length % 2 == 0) {
        return "EVEN";
    } else {
        return "ODD";
    }
}
var result1 = WordLength("JavaScript");
console.log(`Given word "JavaScript" is :${result1}`);
var result1 = WordLength("Developer");
console.log(`Given word "Developer" is :${result1}`);
var result1 = WordLength("Google");
console.log(`Given word "Google" is :${result1}`);


console.log(`=======================================================================END=========================================================`);


















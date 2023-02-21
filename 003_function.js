console.log("...................Before Swapping and After Swapping...........");
var num1 = 100;
var num2 = 200;

var str1 ='Sweety';
var str2 ='Cutie';

var name1 ='Akshay';
var name2 ='Sachin';

function swapVariables(value1, value2) {
  console.log("Before Swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After swap:", value1, value2);
  return "Swapping Variables is Sucussfully Completed";
}
  
var swapResult =swapVariables(num1, num2);
console.log(swapResult);
var swapResult2 =swapVariables(str1,str2);
console.log(swapResult2);
var swapResult3 =swapVariables(name1,name2);
console.log(swapResult3);

console.log("......................function with argument and return value................");
function display(num){
    console.log(num);
    var result = typeof num;//number
    return result;

}
var typeResult =display(100);
console.log(typeResult);


console.log(".....Function witn no argument and no return value....");
function showFullName(){
    console.log("My Full Name Is:Snehal Vagare");
}
showFullName();

console.log(".......function with arguments and no return value.....");

function showAge(age){
    console.log("My age is:",age);
}
showAge(25);


console.log(".........function with no argument and with return value.........");
function fullName(){
    var name ='Snehal Vagare';
    return name;
}
var nameResult =fullName();
console.log(nameResult);

console.log(".....function with argument and return value........");

function sumOfNumbers(num1,num2,num3){
    var sum =num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10,45,79);
console.log(sumResult);
























var num1 =100;
var num2 =200;

var str1 ="sweety";//cutey
var str2 ="cutey";//sweety

var name1 ="Akshay";
var name2 ="Sachin";

function swapVariables(value1,value2){
  //var value1=num1,var value2=num2
  console.log("Before Swap:",value1,value2);
  var temp =value1;
  value1=value2;
  value2=temp;
  console.log("After Swap:",value1,value2);
  return "Swapping Variables Sucessfully Completed";

}
var swapResult=swapVariables(num1,num2);//function call or function invoke
console.log(swapResult);

var swapResult2 =swapVariables(str1,str2);
console.log(swapResult2);

function display(num){
    console.log(num);//100
    var result =typeof num;//number
    return result;
}
var displayResult = display(100);
console.log(displayResult);


//function with no argument and no return value
function showFullName(){
    console.log("My Full Name is:Snehal Vagare");

}
showFullName();

//function with argument and no return value
function showAge(age){
    console.log("My Age Is:",age);

}
showAge(32);

//function with no argument and no return value
function fullName(){
    var name ="Snehal Vagare";
    return name;
}
var fName=fullName();
console.log(fName);

//function with argument and return value
function sumOfNumber(num1,num2,num3){
   var sum=num1+num2+num3;
   return sum;

}
var sumResult = sumOfNumber(10,45,79.56);
console.log(sumResult);





var num1 =100;
var num2 =200;

var str1 ="sweety";//cutey
var str2 ="cutey";//sweety

var name1 ="Billgates";
var name2 ="Stew Gobs";

function swapVariables(value1,value2){
  //var value1=num1,var value2=num2
  console.log("Before Swap:",value1,value2);
  var temp =value1;
  value1=value2;
  value2=temp;
  console.log("After Swap:",value1,value2);
  return "Swapping Variables Sucessfully completed";
}
var swapResult =swapVariables(num1,num2);
console.log(swapResult);
 var swapResult2= swapVariables(str1,str2);
 console.log(swapResult2);
















































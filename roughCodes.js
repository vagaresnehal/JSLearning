console.log(`==================================Assignment 1==================================================================================`);
var myFullName;
console.log(myFullName);
myFullName = "Snehal Vagare";
console.log(myFullName);
myFullName = "Snehal Appasaheb Vagare";
console.log(myFullName);
var myLove = "I Love Only JS";
console.log(myLove);
var firstName = "Snehal";
var lastName = "Vagare";
var age = 25 ;
var address = "Malinagar";
var pincode = 3112108;
var gender = "Female";
var isMarried = true;
console.log(firstName,lastName,age,address,pincode,gender,isMarried);
console.log(`=================================================Assignment2=================================================================`);
console.log(`===========================Assignment A================================================`);
var name = "Snehal";
console.log(`The Value of var is ${name} and the type of var is ${typeof name}`);
var age = 25;
console.log(`The value of var is ${age} and the type of var is ${typeof age}`);
var isLasy = false;
console.log(`The value of var is ${isLasy} and the type of var is ${typeof isLasy}`);
var college ;
var city = null;
console.log(`The value of college is ${college} and the type of college is ${typeof college}`);
console.log(`The value of city is ${city} and the type of city is ${typeof city}`);
console.log(`============================Assignment B=================================================`);
var bankName;
console.log(bankName);
var bankName = "SBI bank";
console.log(`The value of ${bankName} and the type of bankName is ${typeof bankName}`);
var marks = 90 ;
console.log(`The value of marks is ${marks} and the type of marks is ${marks}`);
var isWorking ;
console.log(isWorking);
isWorking = true;
console.log(`The value of isworking is ${isWorking} and the type of isWorking is ${typeof isWorking}`);
var totalCount = "Hundred and Seven";
console.log(`The value of totalCount is ${totalCount} and the type of totalCount is is ${typeof totalCount}`);
totalCount = 107 ;
console.log(`The value of totalCount  is ${totalCount} and it's type is ${typeof totalCount}`);
console.log(`===============================Assignment C ===================================================`);
var name1 ="Sweety";
var name2 ="Cutie";
console.log(name1 ,name2);
var temp ;
temp = name1;
name1 =name2;
name2 =temp;
console.log(name1,name2);
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log(num1,num2,num3);
var temp;
temp=num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log(num1,num2,num3);
console.log(`==========================================================Assignment 3=======================================================`);
console.log(`-------------------------Step1--------------------------------------`);
function personalDetails(firstName,lastName,collegeName){
    console.log(`My First Name is : ${firstName}`);
    console.log(`My Last Name is : ${lastName}`);
    console.log(`My College Name is : ${collegeName}`);

}
personalDetails("Snehal","Vagare","SKN'S COE");
console.log(`-----------------------------------Step2-----------------------------`);
function swapValuesDude(value1,value2){
    console.log("Before swap:",value1,value2);
    var temp;
    temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swap : ",value1,value2);

}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);
console.log(`--------------------------------------Step3------------------------------`);
function addThreeValues(num1,num2,num3){
    var result = num1+num2+num3;
    console.log("After Addition is ",result);

}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
console.log(`===============================================================Assignment 4===================================================`);
console.log(`--------------------------------Assignment A-------------------------------`);
function stringBasics(){
    var companyName = "Vipro pvt.ltd";
    console.log(`My Dream Company Name is : ${companyName}`);
    var hobby1 = "Reading";
    var hobby2 = "Playing Badminton";
    var hobby3 = "Watching Mtivational Vedios";
    console.log(`My Hobbies Are : ${hobby1.length},${hobby2.length},${hobby3.length}`);
    console.log(`Addition of hobbies is : ${hobby1.length+hobby2.length+hobby3.length}`);

}
stringBasics();
console.log(`-----------------------------------Assignment B------------------------------`);
function stringHandsOn(){
    var str = "     Hey You Are doing good,keep it up       ";
    console.log(`Given string is : ${str}`);
    var strLength = str.length;
    console.log(`The Length of Given string is : ${strLength}`);
    var afterTrim = str.trim();
    console.log(`Length of string after trim is ${afterTrim.length}`);
    console.log(`Last index of String is ${afterTrim.length-1}`);
    console.log(`After removing spaces string is : ${afterTrim.length} and  total number of spaces removed is : ${strLength -afterTrim.length} `);
    var res1 = afterTrim.charAt(0);
    var res2 = afterTrim.charAt(32);
    console.log(`First and Last Charactor on the same line is : ${res1}${res2}`);
    var countWords = afterTrim.split(" ");
    console.log(`After Splitting string is ${countWords} and total number of words is ${countWords.length}`);
    console.log(`The index of 'good' is ${afterTrim.indexOf("good")}`);
    console.log(`the Substring from index 22 is : ${afterTrim.substring(22)}`);
    console.log(`is string ends with word "up" : ${afterTrim.includes("up")}`);
    console.log(`is string starts with word "Hey" is : ${afterTrim.includes("Hey")}`);

}
stringHandsOn();
console.log(`=====================================================================Assignment 5================================================== `);
console.log(`------------------------------------------Assignment A---------------------------`);
function squareOfWordLength(string){
    var result = string.length;
    console.log(result);


}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");








































console.log("..............Function with No Arguments and with No Return type....................");

function myFatherName(){
    var fatherName ="Appasaheb";
    var motherName ="Kumudini";
    console.log("My Father Name Is:",fatherName,"||My Mother Name Is:",motherName);
}
myFatherName();

console.log("..........Function with Argument and no Return Value......");

function percentage(sayli,sachin,anjali){
    console.log("percentage of sayli is:",sayli,"||percentage of sachin is:",sachin,"||percentage of anjali is:",anjali);

}
percentage('80%','75%','85%');


console.log("......................Function With Arguments And No Return Value...............");

function personalDetails(firstName,lastName,collegeName){
    console.log("My First Name:",firstName,"||My Last name:",lastName,"||My College Name:",collegeName);

}
personalDetails("snehal","vagare","SKNSCOE,Pandharpur");


var name1 ='virat';
var name2 ='Anushka';
var num1 = 1000;
var num2 =2000;
function swapValuesDude(value1,value2){
    console.log("......Before Swapping Two Variables...");
    console.log(value1,value2);
    var temp =value1;
    value1=value2;
    value2=temp;
    console.log(".....................After Swapping Two Variables............");
    console.log(value1,value2);
}
swapValuesDude(name1,name2);
swapValuesDude(num1,num2);

console.log(".................... Function with Argument And Return Value..............................");
function addThreeValues(num1,num2,num3){
    var sum =num1 + num2 + num3;
    return sum;
}
var sumResult=addThreeValues(10.23,600,40);
var greetResult=addThreeValues("Hello","Good","Morning");
console.log("Addition of Three Numbers is:",sumResult,greetResult);







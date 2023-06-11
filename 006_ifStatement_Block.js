
console.log(`Start`);
var num = 10 ;
if(num>0){
    console.log(`Inside if`);
    console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 10;
if(ageForVote>=18){
    console.log(`You are Eligible for voting`);
    console.log(`Age is ${ageForVote}`);
}
console.log(`End of next if block`);

function checkEvenOdd(num){
    if (num%2==0) {
        return "EVEN";
    }
    if (num%2!=0) {
        return "ODD";
    }
}
var numResult = checkEvenOdd(45);
console.log(`given number  45 : ${numResult}`);
var numResult = checkEvenOdd(70);
console.log(`given number  70 :${numResult}`);

var num1 = 5;
if(num1>0) {
    console.log(`Number ${num1} is positive`);
    
} else {
    console.log(`Number ${num1} is negative`);
}

function maleMarriageEligibility(gender,age,boyname){
    if (gender == "Male" && age >=21) {
        console.log(`You are eligible for Marriage`);
    }else{
        console.log(`You are not eligible`);
    }
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",20,"Anil");


console.log(`start`);
var num = 10;

if (num > 0) {
  console.log(`inside if`);
  console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 20;
if (ageForVote >= 18 == true) {
  console.log("You are eligible for voting");
  console.log(`Age is:${ageForVote}`);
}
console.log("End of Next if block");

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  }
  if (num % 2 != 0) {
    return "Odd";
  }
}
var result = checkEvenOdd(45);
console.log(`Given Number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 is ${result}`);
var result = checkEvenOdd(95);
console.log(`Given Number 95 is ${result}`);

var num1 = 5;
if (num1 > 0) {
  console.log(`Number ${num1} is Positive`);
} else {
  console.log(`Number ${num1} is Negative`);
}


function maleMarriageEligibility(gender, age, boyName) {
  if (gender == "Male" && age >= 21) {
    console.log("You are eligible");
  } else {
    console.log("Not Eligible");
  }
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");

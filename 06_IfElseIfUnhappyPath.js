console.log(`========================================================================step1======================================================`);
function votingCheck(age){
    if (age == 0 || age <0 || age >120) {
        var str = `Your age  ${age} is Invalid`;
        return str;
        
    }
    if (age>=21) {
        var str = `Your age ${age} is Eligible For Voting`;
        return str;
        
    } else {
        var str = `Your age ${age} is Not Eligible For Voting`;
        return str;
    }

}
var result = votingCheck(45);
console.log(result);
var result = votingCheck(17);
console.log(result);
var result = votingCheck(8);
console.log(result);
var result = votingCheck(20);
console.log(result);
var result = votingCheck(-10);
console.log(result);
var result = votingCheck(200);
console.log(result);
var result = votingCheck(0);
console.log(result);


console.log(`===========================================================step2==========================================================`);

function gradeCalculation(marks){
    if (marks>=90 &&  marks !== 150 && (typeof marks !="string")) {
        console.log(`Funtastic Marks: ${marks} Your grade is A+`);
    } 
    if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks ${marks}, Your grade is A`);
    }
    if (marks >=50 && marks < 75) {
        console.log(`Good Marks ${marks}, Your grade is B`);
    }
    if (marks >=35 && marks < 50) {
        console.log(`Marks is ${marks} Your grade is C,Need improvement`);
     } else{
    if (marks <=0 || marks > 100||(typeof marks != "number") || isNaN(marks)) {
        console.log(`Your marks "${marks}" is invalid ,please provide the valid marks`);
    }
    if(marks == 29){
        console.log(`marks ${marks} ENTER the valid marks`);
    }
}

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
gradeCalculation(undefined);

console.log(`====================================================================END=======================================================`);

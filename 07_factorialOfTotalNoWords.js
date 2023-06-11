
var factorialOfWordsCount = function(string){
var count = 1;
var str= 1;
if (string==null || string==undefined) {
    console.log(`The Given String is  "null" which is invalid `);
}
else if(string==""){
    console.log(`The given string "" is not defined so it is invalid`);

}
else{
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char == " ") {
        str = str + 1;
        count=count*str;
    }
}    
}
return count;
}
var result = factorialOfWordsCount(`Revision is the mother of Success`);
console.log(`The Given string is "Revision is the mother of Success"and The total number of words is 6 and it's factorial is : ${result}`);
console.log(`----------------------------------------------------------------------------------------------------------------------------------------------`);
var result = factorialOfWordsCount(`We Never Fail, We always learn`);
console.log(`The Given String is "We Never Fail, We always learn"and the total number of words in the given string is 6 and it's factorial is : ${result}`);
console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`);
factorialOfWordsCount(null);
console.log(`--------------------------------------------------------------------------------------------------------------------------------------------------`);
factorialOfWordsCount("");
console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------`);
var result = factorialOfWordsCount(`Snehal Appasaheb Vagare`);
console.log(`The Given String is "Snehal Appasaheb Vagare"and the total number of words in the given string is 3 and it's factorial is : ${result}`);
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------------------`);




function squareOfWordLength(word){
    console.log("=========================================================step1========================================================");
    var result = "JavaScript";
    var result1 = "Google Chrome";
    var result3 = "Developer Smart";
    console.log(`Length of Word "JavaScript"is ${result.length} and Square Length of Word "JavaScript" is:${result.length**2}`);
    console.log(`Length of Word "Google Chrome"is ${result1.length} and Square length of word "Google Chrome" is:${result1.length**2}`);
    console.log(`Length of Word "Developer Smart"is ${result3.length} and Square length of Word "Developer Smart" is:${result3.length**2}`);
    return "Square Of Length is Sucessfully Completed";
}
var mainResult =squareOfWordLength();
console.log(mainResult);




function stringWord(){
    console.log("================================================step2=====================================================================");
    var result2 = "I Am Angular Developer" ;
    console.log(`Given String is:${result2}`);
    var result5 = result2.length;
    console.log(`Length of String is:${result5}`);
    var result4 = result2.split(" ").length;
    console.log(`Total Number Of Word Is:${result4}`);
    console.log(`Division of Length Of String and Total No Of Words Is:${result5/result4}`);
    console.log(`Multiplication of Length and total no of words is:${result5*result4}`);
}
stringWord();
console.log("================================================================================================================================");

console.log(`*************************Firstly the Vowels Are.....*******************************`);

var vowels = "a e i o u";
reverse = "";
for (let index = 0; index < vowels.length; index++) {
    var series = vowels.charAt(index);
    reverse = reverse + series;
}
console.log(`The vowels  are : ${reverse} `);

console.log(`**************************From the Given String We Find the  Total No of Vowels Count*********************** `);

console.log(`==========================================step1=============================================================================`);

var strCount = function(string){
    var count = 0;
    for (let index = 0; index < string.length; index++) {
        var charAt = string.charAt(index)
       if (charAt==`a` || charAt ==`e`|| charAt==`i` || charAt==`o`|| charAt==`u`||charAt==`A`|| charAt==`E` 
       || charAt==`I` || charAt==`O`|| charAt==`U`){

            count=count+1;
        }
}
         return count;
}
var result = strCount(`JavaScript is the language Of internet`);
console.log(`The Given String Is : "JavaScript is the Language of Internet" and the total no of vowels count is ${result}`);
var result = strCount(`I Am Angular Developer`);
console.log(`The Given String Is : "I Am Angular Developer" and the total no of vowels count is ${result}`);
var result = strCount(`Hard work and Commitment is the key of Success`);
console.log(`The Given String Is : "Hard Work and Commitment is the key of Success " and the total no of vowels count is ${result}`);



console.log(`************************************Total Charactors Available in the Last Word*************************************`);

console.log(`==============================================step2=====================================================================`);

function lastWordCharsCount(string) {
    var reverse ="" ;
    for (let index=string.length-1;index>0; index--) {
        var char = string.charAt(index);
    
        if (char == " ") {
            break ;
        }
        reverse = reverse + char ;

    }
    return reverse ;
    
}
 var result = lastWordCharsCount(`JavaScript is the language Of internet`);
 console.log(`Given String is "JavaScript is the Language of Internet " and the total charactor available in the last word is : ${result.length}`);
 var result = lastWordCharsCount(`I Am Angular Developer`);
 console.log(`Given String is "I Am Angular Developer" and the total charactor available in the last word is : ${result.length}`);
 var result = lastWordCharsCount(`Hard work and Commitment is the key of Success`);
 console.log(`Given String is "Hard Work and Commitment is the key of success" and the total charactor available in the last word is : ${result.length}`);


 console.log(`==========================================================END========================================================================================`);











































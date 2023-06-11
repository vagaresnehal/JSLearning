

var reverseString = function(str){
    var reverse = ""; // wo
    for (let index = str.length-1 ; index >= 0; index--) { // 9 
       var charAt = str.charAt(index);
       reverse = reverse + charAt; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseString("Do it anyhow"); 
console.log(`Reverse String is:${result}`);

console.log(`only last word reverse`);

var reverseLastWord = function(str){ 
    var reverse = ""; 
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);
       if(char == " "){
            break;
       }
       reverse = reverse + char;
    }
    return reverse;
}
var result = reverseLastWord("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);


// "I am Angular  champ"

var fullString = function(str){ 
    var reverse = ""; 
    for (let index=0 ; index <= str.length; index++) {
       var char = str.charAt(index);
       reverse = reverse + char;

    }
    return reverse;
}
var result1 = fullString("I am Angular Champ"); 
console.log(`complete word :${result1}`);


var spaceCount = "I am Angular Developer";
var count = 0;
    for (let index = 0; index < spaceCount.length; index++) {
        var char = spaceCount.charAt(index);
        if (char == " ") {
            count = count + 1;
        }
        
    }
    console.log(`Total no of spaces are :${count}`);


// sir "I am Angular  champ"
var str = "I am Angular  champ";
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count + 1;
    }
}
console.log("Total number of spaces is:", count);

var vowels = "a e i o u";
reverse = "";
for (let index = 0; index < vowels.length; index++) {
    var series = vowels.charAt(index);
    reverse = reverse + series;
}
console.log(`The novels are : ${reverse} `);


console.log(`First 10 prime numbers`);

var n = 1;
var index =index + 1 
 for (let index = 1; index%n==0 && index <=29; index++) {
        
    
    
 }
 console.log(`Prime numbers are:${index}`);


var string1 = function(str1){
    var count = 0 ;
    for (let index = 0; index < str1.length; index++) {
        var char1 = str1.charAt(index);
        if (char1 == " ") {
            count = count + 1 ;
            
        }
    }
    return count;

}
var res1 = string1(`I Am An Angular Developer`);
console.log(`total no of count is ${res1}`);


let firstWordReverse = function(string){
let reverse = "";
for (let index = string.length-9; index>=0; index--) {
    let char = string.charAt(index);
    reverse=reverse+char;
    }
    return reverse;

}
var res3 = firstWordReverse("Good Morning");
console.log(res3);





































    













var greet = "Good Morning";
console.log(typeof greet);

console.log("Total Number of Charactors available into the string variable-greet");
var greetLength =greet.length;//total no of length given(property)
console.log(greetLength);

console.log("Find the charactor by index value");
var charAtIndex3 = greet.charAt(3);//charactor available at index
console.log("Charactor available at index 3 is:",charAtIndex3);

console.log("Find the Last Charactor");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is:",charAtLastIndex);

console.log("Find the index by charctor");
var indexOfM = greet.indexOf('M');
console.log("Index of char M is:",indexOfM);

var greetOfz = greet.indexOf('z');
console.log("Indexof char which is not available into the string:",greetOfz);

console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(o): ", greet.lastIndexOf('o'));
var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case",replaceResult.toUpperCase());
console.log("Lower Case",replaceResult.toLowerCase());

var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed from the string-myName
var count = myName.length-myNameAfterTrim.length;
console.log(count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("Slice()method");
var sliceResult = greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));


console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);
console.log("total words:",splitResult.length);


console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

console.log("split() method");
var myFriendList="Billgates,Stew Job,ElonMusk,Ratan Tata,Sundar Pichai ,satya nadella,Narayan Murti,Nandan NileKani,Larry Page,Surgey Brain,Tim Cook";
var splitResult = myFriendList.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);


















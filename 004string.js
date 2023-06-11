var greet = "Good Morning";
console.log(typeof greet);

console.log("....First we find total no of charactors in this string variable-greet...");

var greetLength = greet.length;
console.log("Total number Of Charactors Available in string Variable is:",greetLength);

console.log("....Find the Charactor by Index Value...");
var charAtIndex3 = greet.charAt(3);
console.log("Charactor at index 3 is:",charAtIndex3);

console.log(".....Find the Last Charactor of greet variable.....");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last Charactor at index greeLength-1 is:",charAtLastIndex);

console.log("..........Find the Index of Charactor M.....");
var indexOfM = greet.indexOf("M");
console.log("Index Of Charactor M is:",indexOfM);

console.log("Index Of Charactor which is not available into the string:",greet.indexOf('z'));

console.log("Index Of 'o'Charactor is:",greet.indexOf('o'));//1 st occurance
console.log("Index Of 'o' charactor is:",greet.lastIndexOf('o'));//3rd or last occurance

console.log("..........For Replacing the Charactor with Other Charactor use replace and first search and then replace........");
var resultReplace = greet.replace("Morning","Evening");

console.log("..........Uppercase and Lowercase String.........");
console.log("After Replace String is:",resultReplace);

console.log("For Uppercase string we use:",resultReplace.toUpperCase());
var upperResult = greet.toUpperCase();
console.log(upperResult);

console.log("For Lowercase string we use:",resultReplace.toLowerCase());

console.log("..............Using Trim (very useful).........");

var myName = "   Snehal   Vagare   ";
var myNameAfterTrim = myName.trim();
console.log("After Removing the spaces of start and end of string using trim is:",myNameAfterTrim,myName.length,myNameAfterTrim.length);


console.log("................Find Total extra spaces Removed From the String-myName is:.....");

var count = myName.length-myNameAfterTrim.length;
console.log("Total number of extra spaces removed from string is:",count);

console.log("....For using if the substring is includes in main string that purpose we use includes()...");

var morIncludes = greet.includes("Mor");
console.log("Is the Substring 'Mor'is Includes in string or Not:",morIncludes);
console.log("Is the Substring 'o' is Includes in string or Not:",greet.includes('o'));
console.log("Is the Substring 'Evening' is Includes in string or Not:",greet.includes('Evening'));

console.log(".........Slice() Method.........");
var sliceResult = greet.slice(5,12);
console.log("after slice method:",sliceResult);
console.log(greet.slice(2,5).length);

console.log(greet.slice(7,10));

console.log("......split method().......");

var splitResult = greet.split(" ");
console.log("After splitting string is:",splitResult);
console.log(typeof splitResult);

var greet1 = "Good Morning My Dear Friends";
var splitResult1 = greet1.split(" ");
console.log("After splitting string is:",splitResult1);
var newResult =splitResult1*2;
console.log(typeof splitResult1);
console.log("Total no of words:",splitResult1.length);

var myFriendList = "Billgates , stew gobs, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tin Cook";

var myFriendListResult = myFriendList.split(",");
console.log(myFriendListResult);
console.log(myFriendListResult.length);
console.log(myFriendListResult.length);

var myFriendListResult1 = myFriendList.split(",");
console.log(myFriendListResult1.length);










































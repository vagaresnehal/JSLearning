function stringHandsOn(){
    console.log("------------step1-----------------------------------------------------------------------------------");
    var strName = "     Hey you are doing good, keep it up       ";
    console.log("Given String is:",strName);
    console.log("---------------step2---------------------------------------------------------------------------------");
    console.log("The Length of string is:",strName.length);
    console.log("-----------------step3-------------------------------------------------------------------------------");
    var strName1 = strName.trim();
    console.log("Extra spaces remove by trim is:",strName1);
    console.log("--------------step4-----------------------------------------------------------------------------------");
    console.log("Total number of extra spaces count that is removed is:",strName.length-strName1.length);
    console.log("----------------step5---------------------------------------------------------------------------------");
    console.log("First and Last Charactor on Same Line is:",strName1.charAt(0),strName1.charAt(strName1.length-1));
    console.log("----------------step6---------------------------------------------------------------------------------");
    console.log("total number of words is:",strName1.split(" "));
    console.log("-----------------step7--------------------------------------------------------------------------------");
    console.log("Index of Word 'good' is:",strName1.indexOf("good"));
    console.log("------------------step8-------------------------------------------------------------------------------");
    var strName2 = strName1.slice(22);
    console.log("substring starting from index 22 is:",strName2);
    console.log("-----------------------------step9--------------------------------------------------------------------");
    console.log("Is string ends with word'up' is:",strName1.includes("up"));
    console.log("------------------------step10------------------------------------------------------------------------");
    console.log("Is string starts with word 'Hey' is:",strName1.includes("Hey"));


}
stringHandsOn();
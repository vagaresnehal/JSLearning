

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

console.log(`--------------------------------------------------------  Step 1  --------------------------------------------------------------`);

const greaterNoArray = arrayNumbers.filter((element) => {
    return element>50;

});
console.log("The Numbers Which are Greater than 50 : ",greaterNoArray);
console.log(`-------------------------------------------------------  Step 2  ---------------------------------------------------------------`);

const evenArray = arrayNumbers.filter((element) => {
    return element%2==0;

});
console.log("Even Numbers Array is : ",evenArray);

console.log(`------------------------------------------------------  Step 3  -----------------------------------------------------------------`);

const oddArray = arrayNumbers.filter((element) => {
    return element%2!=0;

});
console.log("The Odd Numbers Array is : ",oddArray);

console.log(`-----------------------------------------------------  Step 4  --------------------------------------------------------------------`);

const mulOf5 = arrayNumbers.filter((element) => {
    return element%5==0;


});
console.log("The Numbers which are multiple of 5 is : ",mulOf5);

console.log(`-------------------------------------------------------  Step 5  ------------------------------------------------------------------`);

const betw20To50 = arrayNumbers.filter((element) => {
    return element>20 && element<50 ;

});
console.log("The elements which are in between 20 to 50 is : ",betw20To50);





















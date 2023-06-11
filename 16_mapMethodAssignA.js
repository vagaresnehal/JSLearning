

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`---------------------------------------------------------  Adding 10 into each element using map method ----------------------------------`);



const arrayNumbersTransformed = arrayNumbers.map((element) => {
   return element + 10;

});

console.log(" The Transformed Array is : ",arrayNumbersTransformed);

console.log(`--------------------------------------------------------- Square of Each element using map method ----------------------------------------`);


const arrayNumbersTransformed1 = arrayNumbers.map((element) => {
    return element **2;
})

console.log(" The Transformed Array is : ",arrayNumbersTransformed1);

console.log(`---------------------------------------------------------- Addind Index Value into it's Corresponding element ----------------------------`);

const transformedArray = arrayNumbers.map((element,index) => {
    return element+index;

})
console.log(" Transformed Array is : ",transformedArray);





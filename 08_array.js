


var  arrayOfNumbers = [0,2,4,5,6,7,8];
console.log(arrayOfNumbers);

const totalNumOfElements = arrayOfNumbers.length;
console.log("Total number of elements availble in the array is :",arrayOfNumbers.length);

const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 Available : ${is8Available}`);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 Available : ${is9Available}`);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`index of 8 is : ${indexOf8}`);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`index of 100 is : ${indexOf100}`);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];

var valueAtIndex2 = arrayOfNumbers[2];
console.log(`value at index 2 is : ${valueAtIndex2}`); 

arrayOfNumbers[3]=35;
console.log(`After updating Array is : ${arrayOfNumbers}`);

arrayOfNumbers[1]=50;
console.log(`Updated array is : ${arrayOfNumbers}`);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];

arrayOfNumbers.push(40);
console.log(`Adding num 40 at the last using push is ${arrayOfNumbers}` );

arrayOfNumbers.unshift(50);
console.log(`Adding num 50 at the first using unshift is : ${arrayOfNumbers}`);

arrayOfNumbers.pop();
console.log(`After removing last element in the array is : ${arrayOfNumbers}`);

arrayOfNumbers.shift();
console.log(`After removing first element in the array is : ${arrayOfNumbers}`);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45 ];

const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(`Array from index 3 is : ${arrayFromIndex3}`);

var subArray = arrayOfNumbers.slice(2,5);
console.log(`SubArray is : ${subArray}`);
























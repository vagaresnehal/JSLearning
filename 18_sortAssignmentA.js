const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];


console.log(`=========================================== Step 1 ==============================================================================`);
console.log(`-------------------------------------------- Revercing the Given Array ---------------------------------------------------------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`==========================================  Step 2 ==============================================================================`);

arrayRollNumbers.sort();
console.log(`---------------------------- Sorting Array without Custom Logic ----------------------------------------------------------------`);
console.log(arrayRollNumbers);

console.log(`===========================================  Step 3 ============================================================================`);

console.log(`-----------------------------------------  Sorting Array With Custom Logic --------------------------------------------------------`);

let sortedArray = arrayRollNumbers.sort((a,b) => {
    return a>b? 1:-1;

});
console.log("Sorting Array in Acending Order : ",sortedArray);

console.log(`============================================= Step 4 ==========================================================================`);

console.log(`----------------------------------------- Greatest Number From the Array ---------------------------------------------------- `);

const lengthOfLastNo = sortedArray.length-1;
const greatestNo = sortedArray[9];
console.log("The Greatest Number From The Array is : ",greatestNo);

console.log(`============================================ Step 5 ==========================================================================`);

console.log(`----------------------------------------- Smallest Number From the Array ----------------------------------------------------`);

const smallestNo = sortedArray[0];
console.log("The Smallest Number From The Array is : ",smallestNo);

console.log(`=========================================== Step 6 ==========================================================================`);

console.log(`----------------------------------------- Removing Duplicate Elements From the array -------------------------------------`);

const newArray = [...new Set(sortedArray)];
console.log(" Removing Duplicate Elements From The Array Using Set ",newArray);

































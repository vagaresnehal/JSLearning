console.log(`======================================  Join Method ===============================================`);

const arrayOfNames = ["Anil","Sunil","Sita","Bill","Elon"];
const result = arrayOfNames.join(",");
console.log(result);
console.log(typeof result);

console.log(`======================================  Array Resizing ==============================================`);

console.log(arrayOfNames.length);
console.log(arrayOfNames);

console.log(`---------- Array Resizing ----------------`);

arrayOfNames.length = 3 ;
console.log(arrayOfNames.length);
console.log(arrayOfNames);

console.log(`======================= Array Using Set() For Avoiding Duplicate Elements =================================`);
const array = [3,4,5,6,7,2,4,5];
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element);
    
}
console.table(setOfElements);

console.log(`============================ OR ====================================`);

console.log(`============= Using set() array elements is : ===========`);
var array1 = [3,4,5,6,7,2,4,5];
const newArray = [...new Set(array1)];
console.log(newArray);

console.log(`======================= Traversing SET =======================`);
for (const element of setOfElements) {
    console.log(element);
    
}
















const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
const lengthOfFruits = arraySeasonalFruits.length;
console.log(`The length of Given array is : ${lengthOfFruits}`);
console.log(`=================================================step 1======================================================================`);

const indexOfFirst = arraySeasonalFruits[0];
const indexOfLast = arraySeasonalFruits[4];
console.log(`The First Element Of Given Array is : "${indexOfFirst}" and the Last Element of the Given Array is : "${indexOfLast}" `);

console.log(`================================================step 2=======================================================================`);

console.log(arraySeasonalFruits);
arraySeasonalFruits.unshift("Papaya");
console.log(`After adding Papaya at the start of the array is : ${arraySeasonalFruits}`);

console.log(`================================================step 3=======================================================================`);

console.log(arraySeasonalFruits);
const splicedArray = arraySeasonalFruits.splice(4,1);
console.log(`After Removing Mango the Array is : ${arraySeasonalFruits}`);

console.log(`=================================================step 4=======================================================================`);

console.log(arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple");
console.log(`After Adding Pipneapple at the last of the Array is : ${arraySeasonalFruits}`);

console.log(`==================================================step 5=======================================================================`);

console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`After inserting Dragon Fruit Before Water Melon the array is : ${arraySeasonalFruits}`);

console.log(`===================================================step 6=======================================================================`);

console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(`After Replacing Orange with Kiwi the Array is : ${arraySeasonalFruits}`);

console.log(`====================================================step 7======================================================================`);

console.log(arraySeasonalFruits);
const slicedArray = arraySeasonalFruits.slice(1,5);
console.log(`The Elements Starting From 1 to 4 Index is : ${slicedArray}`);

console.log(`======================================================step 8====================================================================`);

console.log(arraySeasonalFruits);
const lastThirdElement = arraySeasonalFruits[4];
const lastSecondElement = arraySeasonalFruits[3];
const lastFirstElement = arraySeasonalFruits[2];
console.log(`Last Three Elements Using Length Property is : ${lastFirstElement} ,${lastSecondElement},${lastThirdElement}`);

console.log(`======================================================END=======================================================================`);



















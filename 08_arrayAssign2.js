const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`------------------------------------------------------------------step 1--------------------------------------------------------`);
console.log(`The Given Array is : ${arrayNumbers}`);
console.log(`The length of Given array Elements is : ${arrayNumbers.length}`);

console.log(`------------------------------------------------------------------step 2---------------------------------------------------------`);
console.log(arrayNumbers);
const arrayFirstElement = arrayNumbers[0];
const arrayLastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`The First Element From the Array is : ${arrayFirstElement} and the Last Element From the Array is : ${arrayLastElement}`);

console.log(`------------------------------------------------------------------step 3---------------------------------------------------------`);
console.log(arrayNumbers);
const arrayThirdLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`The Third Last Element From the Array is : ${arrayThirdLastElement}`);


console.log(`------------------------------------------------------------------step 4---------------------------------------------------------`);
console.log(arrayNumbers);
var array =[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2 == 0) {
      array.push(element);

    }

}
console.log(`The Even Numbers From The Array is : ${array}`);



console.log(`------------------------------------------------------------------step 5---------------------------------------------------------`);
console.log(arrayNumbers);
var array =[];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        array.push(element);
        
    }
    
}
console.log(`The Odd Numbers From the Given Array is : ${array}`);






console.log(`------------------------------------------------------------------step 6--------------------------------------------------------`);
console.log(arrayNumbers);
var array = [];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2==0) {
        array.push(element);
        sum = sum + element;

    }

}
console.log(`Even Positioned Elements From the Given Array is : ${array}`);
console.log(`The sum of Even Positioned Numbers is : ${sum}`);

console.log(`------------------------------------------------------------------step 7---------------------------------------------------------`);
console.log(arrayNumbers);
var array = [];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2!=0) {
        array.push(element);
        sum = sum + element;
    }   
}
console.log(`The Odd Positioned Numbers is : ${array}`);
console.log(`The sum of Odd positioned Numbers is : ${sum}`);



console.log(`------------------------------------------------------------------step 8---------------------------------------------------------`);
console.log(arrayNumbers);
var sum = 0 ;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element ;

    
}
console.log(`The sum of all elements From the Given Array is : ${sum}`);


console.log(`------------------------------------------------------------------step 9---------------------------------------------------------`);
console.log(arrayNumbers);
array = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        array.push(element);
    }
    
}
console.log(`The Numbers which are multiple of 5 is : ${array} `);

console.log(`------------------------------------------------------------------step 10---------------------------------------------------------`);
console.log(arrayNumbers);
    const isIncludes115 = arrayNumbers.includes(115);
    console.log(`Is Number 115 is Available in the Given Array is : ${isIncludes115}`);


console.log(`------------------------------------------------------------------step 11---------------------------------------------------------`);
console.log(arrayNumbers);
const isIncludes23 = arrayNumbers.includes(23);
console.log(`Is Number 23 is Available in the Given Array is : ${isIncludes23}`);




console.log(`------------------------------------------------------------------step 12---------------------------------------------------------`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log(`After Insreting 55 and 66 before index 3 , the Array is : ${arrayNumbers}`);


console.log(`------------------------------------------------------------------step 13---------------------------------------------------------`);
console.log(arrayNumbers);
arrayNumbers.splice(4,3);
console.log(`After Deleting 3 elements Starting from index 4 ,the array is : ${arrayNumbers}`);


console.log(`------------------------------------------------------------------ End ------------------------------------------------------------`);






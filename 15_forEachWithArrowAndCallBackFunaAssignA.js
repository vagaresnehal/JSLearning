console.log(`===============================  Using forEach() With Arrow Function and Callback Function  ==================================`);

const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];

console.log(`-------------------------------------------------   Step 1  ---------------------------------------------------------------------`);

arrayNumbers.forEach((array,index) => {
    console.log(`Array Element is : ${array} and it's index Position is : ${index}`);

    
});

console.log(`-------------------------------------------------   Step 2  --------------------------------------------------------------------`);

arrayNumbers.forEach(element => {
    if (element>0) {
        console.log(`The Positive Number is : ${element}`);
        
    }
    
});

console.log(`------------------------------------------------  Step 3  ----------------------------------------------------------------------`);

const newArray = [];
arrayNumbers.forEach(element => {
    if (element<0) {
        newArray.push(element);
        
    }    
});
console.log("The Negative Numbers From the Array is : " , newArray);

console.log(`-------------------------------------------------  Step 4  -----------------------------------------------------------------------`);

arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log("The Even Numbers are : ", element);
        
    }
    
});

console.log(`--------------------------------------------------  Step 5  ---------------------------------------------------------------------`);

let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
    
});
console.log(`The sum of array elements is : ${sum}`);

console.log(`-------------------------------------------------  Step 6  ----------------------------------------------------------------------`);

arrayNumbers.forEach((element,index )=> {
    if (index%2==0) {
        console.log(`Even Positioned Array elements is : ${element}`);
        
    }
    
});

console.log(`----------------------------------------------------  END  ----------------------------------------------------------------------`);












































const myName = "Snehal is the Smart Girl";
const splittedName = myName.split(" ");
const lengthOfWord = splittedName.length;
console.log(lengthOfWord);


const obj = { }; 
const obj2 = { };
let newObject = {};
Object.assign(newObject,obj,obj2);
console.log(newObject);

//let{id, name}=std;

const array = [ 23, 45, 78, 9, 50, 80, 30, 45, 50 ];

const setArray= [...new Set(array)];
console.log(setArray);

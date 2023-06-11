console.log(`================================= Map() ========================================`);

const mapOfNumbers =  new Map();
mapOfNumbers.set("One",1);
mapOfNumbers.set("Two",2);
mapOfNumbers.set("Three",3);
mapOfNumbers.set("One",11);
mapOfNumbers.set("Four",4);
mapOfNumbers.set("Five",5);
mapOfNumbers.set("Six",6);
mapOfNumbers.set("Three",3);
console.table(mapOfNumbers);
console.log(`---------- size method --------`);
console.log(mapOfNumbers.size);
console.log(`----------- get method() ------`);
const getValue1 = mapOfNumbers.get("One");
console.log(getValue1);
const getValue6 = mapOfNumbers.get("Six");
console.log(getValue6);

console.log(`------------- Delete() method --------`);
const delete2 = mapOfNumbers.delete("Two");
console.log(delete2);

console.log(`-------------- has() method -------------`);

const has7 = mapOfNumbers.has("seven");
console.log(has7);

const has4 = mapOfNumbers.has("Four");
console.log(has4);

console.log(`-------------------- Keys() method -------------`);

const keysOfMap = mapOfNumbers.keys();
console.log(keysOfMap);


console.log(`-------------------- Values() method ------------`);
const valuesOfMap = mapOfNumbers.values();
console.log(valuesOfMap);


console.log(`====================================== Traversing MAP() ==================================`);

for (const element of mapOfNumbers) {
    console.log(element);
    
}
console.log(`------------------ OR -----------------`);

for (const key of keysOfMap) {
    console.log(key,mapOfNumbers.get(key));
    
}












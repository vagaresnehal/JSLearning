console.log(`======================== Avoiding Duplicate Elements of an Array We Use Set() Coccept ============================================`);
const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(2);
setOfNums.add(9);
setOfNums.add(3);
console.log(setOfNums);
console.log(`----------- After Delete 8 ------------`);
setOfNums.delete(8);
console.log(setOfNums);

console.log(`============================ Traversing SET ===============================`);
for (const element  of setOfNums) {
    console.log(element);
}
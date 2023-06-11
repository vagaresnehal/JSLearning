let primeNum = function(num){
    for (let index = 2; index < num; index++) {
        if (num%index == 0) {
            return `Given ${num} is Not a Prime number`;
            
        }
        
    }
    return `Given ${num} is a Prime number`;


}
const res = primeNum(45);
console.log(res);
const res1 = primeNum(23);
console.log(res1);
const res2 = primeNum(12);
console.log(res2);
console.log(`======================================================Factorial Of A Number=====================================================`);

var  factOfNum = function(num){
    let  count =1;
    for (let index = num ; index >=1 ; index--) {

        count = count * index ;

        if (num == undefined || num == null ) {
            
           break ;

        }

    }
    return count;
}
var result = factOfNum(5);
console.log(`The Factorial Number of 5 is :${result}`);
console.log(`----------------------------------------------------------------------------------`);
var result = factOfNum(3);
console.log(`The Factorial Number of 3 is :${result}`);
console.log(`----------------------------------------------------------------------------------`);
var result = factOfNum(null);
console.log(`The Factorial  of null is not valid`);
console.log(`----------------------------------------------------------------------------------`);
var result = factOfNum(8);
console.log(`The Factorial Number of 8 is :${result}`);
console.log(`-----------------------------------------------------------------------------------`);
var result1 = factOfNum(undefined);
console.log(`The Factorial  of undefined is not valid`);
console.log(`-----------------------------------------------------------------------------------`);
var result = factOfNum(9);
console.log(`The Factorial Number of 9 is :${result}`);
console.log(`-----------------------------------------------------------------------------------`);
var result = factOfNum(0);
console.log(`The Factorial Number of 0 is :${result}`)
console.log(`------------------------------------------------------------------------------------`);


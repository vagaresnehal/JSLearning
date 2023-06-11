console.log(`=============================================  Step 1 ======================================================================`);

let str = () => {
console.log(`"Good Morning, Today is Monday"`);
}
str();

console.log(`=============================================  Step 2 ========================================================================`);

let res = (num1,num2,num3) => {
    console.log(`The Multiplication is : ${num1*num2*num3}`);

}
res(5,5,2);
res(10,4,num3=1);

console.log(`=============================================  Step 3 =========================================================================`);

let result = (num1,num2,num3,num4,num5)=> {
    const sum = num1+num2+num3+num4+num5;
    return sum;

}
var res1 = result(100,100,200,349,756);
console.log(`Addition of Numbers is : ${res1}`);
var res1 = result("I am"," learning "," ES6 "," features "," in depth ");
console.log(`String Concating Using Addition is : ${res1}`);

console.log(`===============================================   END ==========================================================================`);



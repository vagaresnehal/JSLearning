console.log(`------------------------------------------------------- Step 1 ------------------------------------------------------------------`);
console.log(`================== Cloning Array Using Shallow Clone ============`);
const arrayNums = [20,3,4,56,90,400,49];
console.log(`Given array is : ${arrayNums}`);
newArray = arrayNums ;
newArray.push(55,66);
console.log(`The Original Array is : ${arrayNums}`);
console.log(`The Cloned Array is : ${newArray}`);

console.log(`-------------------------------------------------------- Step 2 -------------------------------------------------------------`);
console.log(`========================== deep Cloning Using Spread Operator =============`);
const newArrayOfNums = [...arrayNums];
arrayNums.push(10,25);
console.log(`Ihe Original Array is : ${arrayNums}`);
console.log(`The Cloned Array is : ${newArrayOfNums}`);

console.log(`-------------------------------------------------------- Step 3 --------------------------------------------------------------------`);
console.log(`============================= Merge Array Using Spread Operator ===============`);
const arrayEven = [2,30,14,8];
const mergedArray = [...arrayEven,...arrayNums];
console.log(`The Merged Array is : ${mergedArray}`);

console.log(`--------------------------------------------------------- Step 4 --------------------------------------------------------------`);
console.log(`=========================== Employee Information Object ===================`);

const employeeInfo = {
    empId:27,
    empName:"John Doe",
    salary:{
        julyMonth:"40,0000INR",
        augMonth:"50,0000INR",
        junMonth:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharastra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]

}

console.log(employeeInfo);

console.log(`-------------------------------------------------------------- Step 5 --------------------------------------------------------  `);

console.log(`========================= Employee Details ==========================`);
console.log(employeeInfo.address);
console.log(employeeInfo.mobiles);

console.log(`-------------------------------------------------------------- Step 6 ----------------------------------------------------------`);
console.log(`========================= Deep Cloning of Employee Information Using JSON.stringify() =================== `);
const clonedEmployeeInfo= JSON.parse(JSON.stringify(employeeInfo));
console.log(clonedEmployeeInfo);
clonedEmployeeInfo.julyMonth = "80k";
employeeInfo.address.country = "United Kingdom";
console.log(`Updated cloned Object of julyMonth Salary is ${clonedEmployeeInfo.julyMonth}`);
console.log(`Updated Original Object of Country is : ${employeeInfo.address.country}`);













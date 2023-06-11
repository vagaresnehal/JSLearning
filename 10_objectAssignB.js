console.log(`=============== Object Cloning and Traversing ===================`);

console.log(`--------------------------------------------- step 1 ----------------------------------------------------------------------------`);
console.log(`====================== Create Object 1 =========================`);
let bankSbi = {
    bankName:"SBI Bank",
    accountNo:142537376,
    ifscCode:112323,
    branchCode:"sbi122"
};

console.log(bankSbi);

console.log(`---------------------------------------------- Step 2 ---------------------------------------------------------------------------`);
console.log(`====================== Create Object 2 ==========================`);
let bankLocation = {
    street:"Wakad",
    city:"Pune",
    pinCode:423204
};

console.log(bankLocation);

console.log(`------------------------------------------------- step 3 -------------------------------------------------------------------------`);

console.log(`=========================== Clone 1^st Object and 2^nd Object ==================`);
console.log(`=========== Using Object.assign() Cloning is ===============`);

Object.assign(bankSbi,bankLocation);
console.log(bankSbi);

console.log(`============ Using Spread Operator Cloning is ==============`);

bankLocation = {...bankSbi} ;
console.log(bankLocation);

console.log(`---------------------------------------------------  Step 4 --------------------------------------------------------------------`);
console.log(`============== Create new Object rateOfInterest ===================`);
let rateOfInterest = {
    homeLoanInterest:20,
    personalLoanInterest:15,
    dueInterest:10.25

}
console.log(rateOfInterest);
console.log(`---------------------------------------------------  Step 5 -----------------------------------------------------------------------`);
console.log(`================ Merge step 1 ,2 and 4 =============`);

const sbiDetails = {};
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails);
console.table(sbiDetails);

console.log(`----------------------------------------------------- step 6 -------------------------------------------------------------------------`);
console.log(`================== Traversing Object =====================`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}:${element}`);

        
    }
}
    






















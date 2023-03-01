console.log(`==============================================step1: Male Marriage Eligibility============================================================`);


function maleMarriageEligibility(gender,age,boyname){
    if (gender =="Male" && age>=21) {
        return `Hey "${boyname}" You are Eligible for marriage`;
        
    } else {
        return `Hey "${boyname}" You are not Eligible for Marriage`;
    }

}
var res = maleMarriageEligibility("Male",25,"Billgates");
console.log(res);
var res = maleMarriageEligibility("Male",17,"Stew Gobs");
console.log(res);


console.log(`========================================================step2:Female Marriage eligibility======================================================`);

function femaleMarriageEligibility(gender,age,girlname){
    if (gender == "Female" && age>=18) {
        var res = `Hey "${girlname}" You are eligible for Marriage`;
        return res;
    } else {
        var res = `Hey "${girlname}" You are not eligible for Marriage`;
        return res;
    }

}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);


console.log(`===============================================================END======================================================================================`);










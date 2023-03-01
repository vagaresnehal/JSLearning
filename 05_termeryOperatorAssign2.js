
console.log(`======================================================step1====================================================`);

function maleMarriageEligibility(gender,age,boyname){
   var res1 = gender=="male" && age >= 21 ? "Eligible For Marriage":"Not eligible For Marriage";
   return res1;
}
var msgReturn = maleMarriageEligibility("male",25,"Billgates");
console.log(`Hey "Billgates" You are ${msgReturn}`);
var msgReturn = maleMarriageEligibility("Male",17,"Stew Gobs");
console.log(`Hey "Stew Gobs" You are ${msgReturn}`);

console.log(`=====================================================step2=====================================================`);
function femaleMarriageEligibility(gender,age,girlname){
    var res2 = gender == "Female" && age >= 18 ?  `Hey " ${girlname} " You Are Eligible For marriage`:`Hey "${girlname}" You Are Not Eligible For Marriage`;
    return res2 ;
}
var msgReturn1 = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(msgReturn1);
var msgReturn1 = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(msgReturn1);


console.log(`======================================================END=========================================================`);





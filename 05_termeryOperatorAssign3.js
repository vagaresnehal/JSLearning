
console.log(`===================================================================================step=========================================================================================================================`);

function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore >= 70 || hscScore >= 80 || sscScore >90 ? `Congrates "${candidateName}" You Are Eligible For TCS Interview`:`Sorry "${candidateName}" Unfortunately You Are not Eligible For Interview`;
    console.log(result);
}
tcsInterviewEligibility(80,86,90,"Snehal");
tcsInterviewEligibility(70,65,55,"Mohini");
tcsInterviewEligibility(60,79,88,"Mona");

console.log(`===================================================================================END============================================================================================================================`);
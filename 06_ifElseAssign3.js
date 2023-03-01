console.log(`=================================================================step1=============================================================`);

function tcsInterview(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates "${candidateName}" You are Eligible for TCS Interview`);
        
    } else {
        console.log(`Unfortunately "${candidateName}" You are Not Eligible for TCS Interview`);
    }

}
tcsInterview(80,86,90,"Snehal");
tcsInterview(70,65,55,"Mohini");
tcsInterview(60,79,88,"Mona");

console.log(`====================================================================END================================================================`);
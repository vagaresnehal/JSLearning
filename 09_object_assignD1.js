let professor = {
    name:"Ashok",
    id:132456,
    subject:"Maths",
    city:"Pune",
    address:"Wakad",
    age:35,
    communicationSkills:"English",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing"
    },
    certificates:["Hacker Rank Participation","certificate in IFE course","certificate in Adv Programming"],
    addDegrees: function(){
        return `Teacher Degrees are ,Engineering in ${this.degrees.engineering} and PHD in ${this.degrees.PHD}`;
    }



}
console.log(`--------------------------------------------------- step 1 ------------------------------------------------------------------------`);
const result = professor.addDegrees();
console.log(result);
console.log(`--------------------------------------------------- step 2 -------------------------------------------------------------------------`);
professor.totalExperience = "14 Years";
console.log(`Total Experience Of Teacher is ${professor.totalExperience}`);
console.log(`--------------------------------------------------- step 3 -------------------------------------------------------------------------`);
professor.age = 37;
console.log(`The modified age of Teacher is : ${professor.age}`);
console.log(`--------------------------------------------------- step 4 -------------------------------------------------------------------------`);
console.log(`========Before Adding Oracle Certified the array is========`);
console.table(professor.certificates);
professor.certificates[professor.certificates.push("Oracle Certified")];
console.log(`========After Adding Oracle Certified the array is========`);
console.table(professor.certificates);
console.log(`--------------------------------------------------- step 5 -------------------------------------------------------------------------`);
const lastArrayCertificate = professor.certificates[professor.certificates.length-1];
console.log(`The Last Element of The Array is ${lastArrayCertificate}`);
console.log(`---------------------------------------------------- END ---------------------------------------------------------------------------`);














console.log(``);
class bank{
    constructor(bankName,location,ifscCode,branchCode){
        this.bankName=bankName,
        this.location=location,
        this.ifscCode=ifscCode,
        this.branchCode=branchCode

    }

}
const yesBank = new bank("Yes Bank","Mumbai","YES65746367","YES1232");
console.log(`${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);
const sbiBank = new bank("SBI Bank","Pune","SBI64745335","SBI2233");
console.log(`${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);
const mahBank = new bank("Maharastra Bank","Delhi","MAH34554587","MAH3222");
console.log(`${mahBank.bankName},${mahBank.location},${mahBank.ifscCode},${mahBank.branchCode}`);
const axisBank = new bank("Axis Bank","Banglore","AXIS35646466","AXIS3353");
console.log(`${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);

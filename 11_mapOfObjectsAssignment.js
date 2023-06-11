console.log(`===================================================== Object Created Using Class ===============================================`);
class Bank{
    constructor(bankName,location,accountNo,ifscCode,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifscCode = ifscCode;
        this.interestRate = interestRate
        

    }
}

const axisBank = new Bank("AXIS Bank","Pune","132546467",90485,12);
console.log(axisBank);
const sbiBank = new Bank("SBI Bank","Mumbai","676868675",34251,10);
console.log(sbiBank);
const iciciBank = new Bank("ICICI Bank","Nagpur","34554587","3222",15);
console.log(iciciBank);
const kotakBank = new Bank("KOTAK Bank","Chennai","65746367","8364",9.3);
console.log(kotakBank);
const hdfcBank = new Bank("HDFC Bank","Delhi","245663535","2434",13.5);
console.log(hdfcBank);
const panjabBank = new Bank("PANJAB Bank","Pune","256637489","3326",8.7);
console.log(panjabBank);

console.log(`===================================== Object Using set() ================================================`);

const setOfBanks = new Set();
setOfBanks.add(axisBank);
setOfBanks.add(sbiBank);
setOfBanks.add(iciciBank);
setOfBanks.add(kotakBank);
setOfBanks.add(hdfcBank);
setOfBanks.add(panjabBank);

console.log(setOfBanks);


console.log(`========================================== Traversing set() =============================================`);

for (const bank of setOfBanks) {
    console.log("Bank Name :",bank.bankName,"Location:",bank.location);
    
}
















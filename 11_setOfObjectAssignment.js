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

console.log(`===================================== Object Using MAP() ================================================`);

const mapOfObjects = new Map();
mapOfObjects.set(132546467,axisBank);
mapOfObjects.set(676868675,sbiBank);
mapOfObjects.set(34554587,iciciBank);
mapOfObjects.set(65746367,kotakBank);
mapOfObjects.set(245663535,hdfcBank);
mapOfObjects.set(256637489,panjabBank);

console.log(mapOfObjects);


console.log(`========================================== Traversing MAP() =============================================`);
const keysOfMapOfBanks = mapOfObjects.keys();
//console.log(keysOfMapOfBanks);
 for (const keys of keysOfMapOfBanks) {
    const values =mapOfObjects.get(keys);
    console.log("Keys :" , keys , "BankName : ",values.bankName," accountNo :",values.accountNo," Interestrate :",values.interestRate);
 }    

















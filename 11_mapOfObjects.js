class Bank{
    constructor(bankName,location,account,ifsc,interestRate){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;

    }
}
const sbiBank = new Bank("SBI Bank","Wakad","132546467",90485,12);
const axisBank = new Bank("Axis Bank","Mumbai","676868675",34251,10);
const mahBank = new Bank("Maharastra Bank","Delhi","34554587","3222",15);
const yesBank = new Bank("Yes Bank","Mumbai","65746367","1232",34);

const mapOfBanks = new Map();
mapOfBanks.set("SBI11",sbiBank);
mapOfBanks.set("AXIS22",axisBank);
mapOfBanks.set("MAH33",mahBank);
mapOfBanks.set("YES44",yesBank);


const getYesBank = mapOfBanks.get("YES44");
console.log(mapOfBanks.get("YES44"));


console.log(`====================================== Traversing MAP() =======================================================`);

const keysOfMapOfBanks = mapOfBanks.keys();
console.log(keysOfMapOfBanks);

for (const keys of keysOfMapOfBanks) {
    console.log(keys,mapOfBanks.get(keys));

    
}






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
console.log(sbiBank);
const axisBank = new Bank("Axis Bank","Mumbai","676868675",34251,10);
console.log(axisBank);
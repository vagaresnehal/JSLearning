let sbiBank = {
    bankName:"SBI Bank",
    location:"Mumbai",
    accountNo:11223344,
    ifsc:9876,
    interestRate:12,
    showDetails: function(){
        console.log(`Bank Name is ${sbiBank.bankName},location is ${sbiBank.location},account no is ${sbiBank.accountNo},ifsc code is ${sbiBank.ifsc} and the Interest Rate is ${sbiBank.interestRate}`);
        console.log(`-------------------------------------------------------------------------------------------------------------------`);
    }
}
sbiBank.showDetails();
const axisBank= {
        bankName:"Axis Bank",
        location:"Pune",
        accountNo:5566644,
        ifsc:3241,
        interestRate:10,
        showDetails: function(){
            console.log(`Bank Name is ${axisBank.bankName},location is ${axisBank.location},account no is ${axisBank.accountNo},ifsc code is ${axisBank.ifsc} and the Interest Rate is ${axisBank.interestRate}`);
            console.log(`------------------------------------------------------------------------------------------------------------------------------`);

        }
}
axisBank.showDetails();
const  hdfcBank = {
        bankName:"HDFC Bank",
        location:"Baramati",
        accountNo:6677456,
        ifsc:1423,
        interestRate:16,
        showDetails: function(){
            console.log(`Bank Name is ${hdfcBank.bankName},location is ${hdfcBank.location},account no is ${hdfcBank.accountNo},ifsc code is ${hdfcBank.ifsc} and the Interest Rate is ${hdfcBank.interestRate}`);
            console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------`);

        }
    
}
hdfcBank.showDetails();
const  yesBank = {
        bankName:"YES Bank",
        location:"Sangli",
        accountNo:1155668,
        ifsc:5476,
        interestRate:14,
        showDetails:function(){
            console.log(`Bank Name is ${yesBank.bankName},location is ${yesBank.location},account no is ${yesBank.accountNo},ifsc code is ${yesBank.ifsc} and the Interest Rate is ${yesBank.interestRate}`);
            console.log(`-----------------------------------------------------------------------------------------------------------------------`);


        }
    
}
yesBank.showDetails();


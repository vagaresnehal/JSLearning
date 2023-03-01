
console.log(`=============================================================step==================================================================`);

var checkLeapYear = function(leapYear){
    if (leapYear == undefined || leapYear == null|| isNaN(leapYear) || typeof leapYear!="number"){
        console.log(`Given year ${leapYear} is not valid , provide the valid year`);
    } else if (  leapYear%4 == 0 && leapYear%100 != 0 || leapYear%400 == 0 && leapYear%100 == 0)
    {
        console.log(`Given year ${leapYear} is leap year`);
    }else{
        console.log(`Given year ${leapYear} is not leap year`);
    }
    
    
    
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);

console.log(`========================================================================END===========================================================`);




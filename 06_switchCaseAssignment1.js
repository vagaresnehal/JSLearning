console.log(`==========================================Switch Case Assignment=======================================================================`);

function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`Name of the month ${monthNumber} is :Janaury `);
            
            break;
        case 2:
            console.log(`Name of the month ${monthNumber} is :Februvary `);

            break;
        case 3:
            console.log(`Name of the month ${monthNumber} is :March `);
        
            break;
        case 4:
            console.log(`Name of the month ${monthNumber} is :April `);

        break;
        case 5:
            console.log(`Name of the month ${monthNumber} is : May `);

        break;
        case 6:
            console.log(`Name of the month ${monthNumber} is : June `);

        break;
        case 7:
            console.log(`Name of the month ${monthNumber} is : Jully `);

        break;
        case 8:
            console.log(`Name of the month ${monthNumber} is : Ouguest `);

        break;
        case 9:
            console.log(`Name of the month ${monthNumber} is : September `);

        break;
        case 10:
            console.log(`Name of the month ${monthNumber} is : Octember `);

        break;
        case 11:
            console.log(`Name of the month ${monthNumber} is : November `);

        break;
        case 12:
            console.log(`Name of the month ${monthNumber} is : December `);

        break;

        default:
            console.log(`Given Name of the month  ${monthNumber} is invalid`);

        break;
    }

}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(0);
monthOfYear(-5);

console.log(`=================================================================END===================================================================`);

function dayCheck(dayNumber){
    if(dayNumber <= 0 || dayNumber > 7 || dayNumber == null || isNaN(dayNumber)){
        console.log(`Invalid Day Number ${dayNumber}`);
    }
    if (dayNumber == 1) {
        console.log(`Monday`);
    }
    if (dayNumber == 2) {
        console.log(`Tuesday`);
    }
    if (dayNumber == 3) {
        console.log(`Wensday`);
    }
    if (dayNumber == 4) {
        console.log(`Thursday`);
    }
    if (dayNumber == 5) {
        console.log(`Friday`);
    }
    if (dayNumber == 6) {
        console.log(`Saturday`);
    }
    if (dayNumber == 7) {
        console.log(`Sunday`);
    }

}
dayCheck(null);
dayCheck(0);
dayCheck(-7);
dayCheck(9);
dayCheck(3);
dayCheck(5);
dayCheck(7);

console.log(`============================================Instead of if statements we use Switch Case Statements=================================`);

function weekData(day){
    switch (day) {
        case 1:
            console.log(`Day Of the Week is ${day}: Monday`);
            break;
        case 2:
            console.log(`Day Of the Week is ${day}: Tuesday `);
            break;
        case 3:
            console.log(`Day of the Week is ${day}: Wensday`);
            break;
        case 4:
            console.log(`Day of the Week is ${day}: Thursday`);
            break;
        case 5:
            console.log(`Day of the Week is ${day}: Friday`);
            break;
        case 6:
            console.log(`Day of the Week is ${day}: Satursday`);
            break;
        case 7:
            console.log(`Day of the Week is ${day}: Sunday`);
            break;
        default:
            console.log(`Invalid day :${day}`);
            break;
    }
}
weekData(3);
weekData(7);
weekData(0);
weekData(-2);
weekData(100);
weekData(null);
weekData(undefined);


























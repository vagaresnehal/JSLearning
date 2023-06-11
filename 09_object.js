let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    id:132456,
    age: 22,
    collegeName: "ABC",
    address: {
        street:"Wakad",
        city:"Pune",
        PIN:"431204"
    },
    school:"poddar School",
    friends:["mona","mohini","prachi"],
    show: function(){
        console.log(`I Am A show() function`);
    }
    
};
student.show();
console.log(student.friends[student.friends.length-1]);
console.log(student.friends);
student.marks = {
    math:80,
    physics:60,
    drawing:70
}
console.log(student.marks);








student.address.PIN ="431205";
console.log(student.address.PIN);
console.log(student.address.city);
console.log( typeof student.address);
console.log(typeof student.id);
console.log(student);
console.log(typeof student);
student.id;
console.log(student.id);
student.collegeName = "COEP PUNE";
console.log(student.collegeName);
student.city ="Mumbai";
console.table(student);
student.country = "India";
console.table(student);
delete student.isWorking;
console.log(student);
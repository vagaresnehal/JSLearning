console.log(`============================================================ Step1 =========================================================`);

class Vehicle{
    constructor(carName,ownerName,model,companyName,colour,Prize,type){
        this.carName = carName;
        this.ownerName = ownerName;
        this.companyName = companyName;
        this.colour = colour;
        this.Prize = Prize;
        this.type = type;


    }
}
const alto800 = new Vehicle("Alto 800","Devansh Bandagar","Maruti Suzuki","Red","2,94,000","suv");
console.log(alto800);
console.log(`-------------------------------------------------------------------------------------------------`);
const dezireModelZxi = new Vehicle("Dezire Model zxi","Avinash Kulkarni","Dezire","Black","8,67,000","zxi");
console.log(dezireModelZxi);
console.log(`----------------------------------------------------------------------------------------------------`);
const newEeco = new Vehicle("NEW EECO","Swati Deshmukh"," Suzuki ","Neavy Blue","2,40,000","suv");
console.log(newEeco);
console.log(`------------------------------------------------------------------------------------------------------`);
const hyundaicreta = new Vehicle("Hyundai Creta","Jyoti Tarange","Hyundai","Brown","9,00,000","suv");
console.log(hyundaicreta);
console.log(`---------------------------------------------------------------------------------------------------------`);
const mahindraBolero = new Vehicle("Mahindra Bolero","Kritika Sanan","Mahindra","Black","8,94,000","suv");
console.log(mahindraBolero);
console.log(`-----------------------------------------------------------------------------------------------------------`);


console.log(`============================================================== Step 2 ==========================================================================`);



class College{
    constructor(collegeName,university,location,departments,teachers,address,city){
        this.collegeName = collegeName;
        this.university = university;
        this.location = location;
        this.departments = departments;
        this.teachers = teachers;
        this.address = address;
        this.city = city;

    }
}
const dypatilpune = new College("DY PATIL PUNE","Pune","Akurdi","Entc,Civil,Mechanical,CSC",40,"Akurdi Pune","Pune");
console.log(dypatilpune);
console.log(`----------------------------------------------------------------------------------------------------------------`);

const jspm = new College("JSPM PUNE","Pune","Thathawade","Entc,Civil,Mechanical,CSC,Electrical",37,"Thathawade, Pune","Pune");
console.log(jspm);
console.log(`-----------------------------------------------------------------------------------------------------------------`);

const mitalandi = new College("MIT Alandi , PUNE","Pune","Alandi","Electrical,Civil,Mechanical,CSC",30,"Alandi, Pune","Pune");
console.log(mitalandi);
console.log(`--------------------------------------------------------------------------------------------------------------------`);

const rizvi = new College("RIZVI COLLEGE OF ENGINEERING","Mumbai","Bandra","MHT-CET,JEE MAIN",60,"Bandra,Mumbai","Mumbai");
console.log(rizvi);
console.log(`--------------------------------------------------------------------------------------------------------------------`);


console.log(`==================================================== Step 3 ==================================================================`);
console.log(`======================================== Traverse Object Using For In Loop ================================================`);

let traverseObject = function(College){
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}:${element}`);

            
        }


    }



}
traverseObject(dypatilpune);
console.log(`-------------------------------------------------------------------------------------------------------------`);
traverseObject(jspm);
console.log(`--------------------------------------------------------------------------------------------------------------`);
traverseObject(mitalandi);
console.log(`---------------------------------------------------------------------------------------------------------------`);
traverseObject(rizvi);
console.log(`----------------------------------------------------------------------------------------------------------------`);



console.log(`==================================================== Step 4 ===================================================================`);

console.log(`------------------Find the given no 11 is a prime number or not-------------------------`);

let num = 11;
if (num%11 == 0) {
    console.log(`Given Number ${num} is a Prime Number`);
}
else{
    console.log(`Given Number is Not a Prime Number`);
}













        
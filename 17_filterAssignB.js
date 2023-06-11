class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;

    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","Hr",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`-------------------------------------------------  Step 1  -----------------------------------------------------------------------`);
console.log("Employees Working in TCS Company..");
arrayEmployees.filter((employees) => {
    if (employees.emp_company=="TCS") {
        console.log("Employee Name : ",employees.emp_name,"Employee Company : ",employees.emp_company);   
    }
});

console.log(`-------------------------------------------------  Step 2  -------------------------------------------------------------------------`);

const avege = arrayEmployees.filter((element) => {
    return element.emp_company=="Wipro";
    
        
    });
console.log(avege);

let sumSalary = 0;
avege.forEach((currentValue) => {
    sumSalary = sumSalary + currentValue.emp_salary;
    

});
const average = sumSalary/avege.length;
console.log("Average Salary of Employee From Company Wipro is : ",average);

console.log(`-------------------------------------------------  Step 3  ----------------------------------------------------------------------------`);

const employeesFromCompany = arrayEmployees.filter((element) => {
    return element.emp_company=="Wipro"||element.emp_company=="Infy";

});
console.log(employeesFromCompany);

let totalSalary = 0 ;
employeesFromCompany.forEach((element) => { 
    totalSalary = totalSalary + element.emp_salary;

});
let totalAverage = totalSalary/employeesFromCompany.length;
console.log("Average Salary Of Employees From Company Wipro and Infy is : ",totalAverage);
























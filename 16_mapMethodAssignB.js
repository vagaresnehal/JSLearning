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

console.log(`---------------------------------------------------   Employees Names      ----------------------------------------------`);

arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


const transformedArray1 = arrayEmployees.map((element) => {
    return element.emp_name;

});
console.log( "Employees Names : ",transformedArray1);


console.log(`----------------------------------------------    Employees Department ----------------------------------------------------------`);

const transformedArray2 = arrayEmployees.map((element) => {
    return element.emp_dept;

});
console.log(" Employees Departments : ",transformedArray2);

console.log(`--------------------------------------------------    Employees ID   -------------------------------------------------------------------------------`);


const transformedArray3 = arrayEmployees.map((element) => {
    return element.emp_id;

});
console.log(" Employees ID's : ",transformedArray3);

console.log(`------------------------------------------------------   Employees Who's Working in TCS Company  -------------------------------------------------- `)

arrayEmployees.map((element) => {
    if (element.emp_company == "TCS") {
    const res = element.emp_name;
    console.log(" Employees Names : ",res);

        
    }

});



























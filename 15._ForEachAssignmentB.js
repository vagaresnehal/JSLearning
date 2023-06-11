console.log(`======================================  Object Traversing Using ForEach Loop =============================================`);

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

console.log(`---------------------------------------------------------  Step 1  -----------------------------------------------------------`);

arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

arrayEmployees.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log("Employee Name : ",employee.emp_name ," Company Name : ", employee.emp_company);
    
    }
    
});

console.log(`---------------------------------------------------------   Step 2  -------------------------------------------------------------`);

arrayEmployees.forEach(element => {
    if (element.emp_salary>=50000) {
        console.log("Employee id : ",element.emp_id,"Employee Name : ",element.emp_name,"Employee Department : ",element.emp_dept,"Employee Salary : ",element.emp_salary,"Employee Company Name : ",element.emp_company);
        
    }
    
});

console.log(`----------------------------------------------------------   Step 3  -------------------------------------------------------------`);

let sumsalary = 0 ;
arrayEmployees.forEach(employees => {
        sumsalary = sumsalary+employees.emp_salary;

    
});
console.log(" The Sum of all employees Salary is : ",sumsalary);

console.log(`-----------------------------------------------------------  Step 4   -------------------------------------------------------------`);


        let totalLength = arrayEmployees.length;
        let average = (sumsalary/totalLength);
        console.log("The Average of Total Employees Salary is : " , average);


console.log(`----------------------------------------------------------  step 5   ---------------------------------------------------------------`);


arrayEmployees.forEach(element => {
    if (element.emp_dept == "IT" && element.emp_salary>=75000 || element.emp_dept == "HR" && element.emp_salary >=75000) {
        console.log("Employee id : ",element.emp_id,"Employee Name : ",element.emp_name,"Employee Department : ",element.emp_dept,"Employee Salary : ",element.emp_salary,"Employee Company Name : ",element.emp_company);
   
    }
    
});

console.log(`-------------------------------------------------------  END  -----------------------------------------------------------------------`);


































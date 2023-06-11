console.log(`================================================== Employee Details =====================================================================`);
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


let array_employess = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`==============================================  Step 1  ============================================`);
for (let element of array_employess) {
    if (element.emp_company == "TCS") {
        console.log(`Employee Name: ${element.emp_name} and Company Name: ${element.emp_company}`);
    
        
    }
    
}

console.log(`==============================================  Step 2  ================================================`);

for (const finance of array_employess) {
    if (finance.emp_dept == "Finance") {
        console.log(`Employee Name : ${finance.emp_name} and Department Name : ${finance.emp_dept}`);
        
    }
}

console.log(`=============================================  Step 3  =========================================================================`);

for (const name of array_employess) {
    if (name.emp_name.startsWith("R")) {
        console.log(`Employee id : ${name.emp_id} Employee Name : ${name.emp_name} Department Name : ${name.emp_dept} Salary : ${name.emp_salary} Company Name : ${name.emp_company}`);

        
        
    }
    
}

console.log(`===========================================  Step 4  ==========================================================================`);

for (const employee of array_employess) {
    if (employee.emp_salary > 75000) {
        console.log(` Employee Name : ${employee.emp_name} Salary : ${employee.emp_salary} Company Name : ${employee.emp_company}`);

        
    }
    
}


console.log(`===========================================  Step 5  ===========================================================================`);

for (const emp of array_employess) {
    if (emp.emp_salary >= 50000 && emp.emp_dept == "IT") {
        console.log(`Employee id : ${emp.emp_id} Employee Name : ${emp.emp_name} Department Name : ${emp.emp_dept} Salary : ${emp.emp_salary} Company Name : ${emp.emp_company}`);

        
    }
    
}

console.log(`===========================================  Step 6  =============================================================================`);

for (const ele of array_employess) {
    if (ele.emp_company == "Infy") {
        console.log(`Employee id : ${ele.emp_id} Employee Name : ${ele.emp_name} Department Name : ${ele.emp_dept} Salary : ${ele.emp_salary} Company Name : ${ele.emp_company}`);

        
    }
    
}


console.log(`=================================================  END  ==============================================================================`);



























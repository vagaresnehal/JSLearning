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


const mapOfObject = new Map();
mapOfObject.set(22,emp_anil);
mapOfObject.set(33,emp_radha);
mapOfObject.set(55,emp_rishi);
mapOfObject.set(66,emp_sonali);
mapOfObject.set(77,emp_monika);
mapOfObject.set(88,emp_viny);
mapOfObject.set(99,emp_mahi);
console.log(mapOfObject);

const allKeys = mapOfObject.keys();
//console.log(allKeys);
const allValues = mapOfObject.values();
//console.log(allValues);
console.log(`======================================  Map Traversing Using ForEach Loop ==========================================================`);
mapOfObject.forEach(element => {
    console.log(element.emp_id,"==>","Name:",element.emp_name  , "Department:",element.emp_dept  , "Company:", element.emp_company  , "Salary:",element.emp_salary);
    
});


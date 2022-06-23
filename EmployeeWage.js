//UC1: Employee Present or Absent
{
    const Is_Present = 1
    let EmpCheck = Math.floor(Math.random() * 2);
    if(EmpCheck == Is_Present)
    {
        console.log("Employee is Present");
    }
    else
    {
        console.log("Employee is Absent");
    }
}

//UC2: Daily Employee Wage with Switch Case
const IsPartTime = 1;
const IsFullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const WagePerHr = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 3);
switch (empCheck)
{
    case IsPartTime:
        empHrs = PartTimeHrs;
        break;
    case IsFullTime:
        empHrs = FullTimeHrs;
        break;
    default:
        empHrs = 0;
        break;
}
let empWage = empHrs * WagePerHr;
console.log("Daily Employee Wage : " + empWage);


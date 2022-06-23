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

//UC3 : Total Hours with Function
const IsPartTime = 1;
const IsFullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const WagePerHr = 20;
const WorkingDays = 20;

    
function WorkingHrs(empCheck)
{   
    switch (empCheck)
    {
        case IsPartTime:
            return PartTimeHrs;
        case IsFullTime:
            return FullTimeHrs;
        default:
            return 0;
        }
}
let TotalEmpHrs = 0;
for(let day = 0; day < WorkingDays; day++)
{
    let empCheck = Math.floor(Math.random() * 3);
    TotalEmpHrs += WorkingHrs(empCheck);
}
let EmpWage = TotalEmpHrs * WagePerHr;
console.log("Hours: " + TotalEmpHrs + "\nMontly Employee Wage is: " + EmpWage);

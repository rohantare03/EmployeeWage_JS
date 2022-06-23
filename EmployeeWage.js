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

//UC5 : Employee Wage with Condition
const IsPartTime = 1;
const IsFullTime = 2;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
const WagePerHr = 20;
const WorkingDays = 20;
const MaxHours_In_A_Month = 160;
    
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
let TotalWorkingDays = 0;
while(TotalEmpHrs <= MaxHours_In_A_Month && TotalWorkingDays < WorkingDays)
{
    TotalWorkingDays++;
    let CheckEmp = Math.floor(Math.random() * 3);
    TotalEmpHrs += WorkingHrs(CheckEmp);
}
let EmpWage = TotalEmpHrs * WagePerHr;
console.log("Total Days: " + TotalWorkingDays + "\nTotal Hours: " + TotalEmpHrs +"\nEmployee Wage is: " + EmpWage);


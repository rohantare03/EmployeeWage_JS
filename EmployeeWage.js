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

//UC6 : Employee Wage in Array
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
function DailyWages(EmpHrs)
{
    return EmpHrs * WagePerHr;
}
let EmpDailyWageArr = new Array(); 
let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
let EmpDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(TotalEmpHrs <= MaxHours_In_A_Month && TotalWorkingDays < WorkingDays)
{
    TotalWorkingDays++;
    let CheckEmp = Math.floor(Math.random() * 3);
    let EmpHrs = WorkingHrs(CheckEmp);
    TotalEmpHrs += EmpHrs;
    EmpDailyWageArr.push(DailyWages(EmpHrs));
    EmpDailyWageMap.set(TotalWorkingDays, DailyWages(EmpHrs));
    empDailyHrsMap.set(TotalWorkingDays, EmpHrs);
}
let EmpWage = DailyWages(TotalEmpHrs);
console.log("Total Days: " + TotalWorkingDays + "\tTotal Hours: " + TotalEmpHrs +"\tEmployee Wage is: " + EmpWage);


//Array Helper Functions
// UC 7A : Calc Total Wage using Array foreach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyempwage)
{
    totalEmpWage += dailyempwage;
}
EmpDailyWageArr.forEach(sum);
console.log("Total Days: " + TotalWorkingDays + " Total Hrs: " + TotalEmpHrs + " Emp Wage: " + totalEmpWage);

function totalWages(totalWages,dailyempwage)
{
    return totalWages + dailyempwage;
}
console.log("Emp Wage with reduce: " + EmpDailyWageArr.reduce(totalWages,0));

//UC 7B : Show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = EmpDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C : Show Days When Full Time Wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

//UC 7D : Find the first occurrence when Full Time Wage earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("First Time FullTime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

//UC 7E : Check if Every Element of Full Time Wage is truely holding Full Time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("Check All Element Have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

//UC 7F : Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G : Find the number of Days the Employee Worked
function totalDaysWorked(Num_OF_Working_DAYS,dailyWage)
{
    if(dailyWage > 0 ) return Num_OF_Working_DAYS+1;
    return Num_OF_Working_DAYS;
}
console.log("Number of Days Emp Worked: " + EmpDailyWageArr.reduce(totalDaysWorked,0));

//UC8 : Map Functions
console.log("Employee Wage Map TotalWages : " + Array.from(EmpDailyWageMap.values()).reduce(totalWages, 0));

//UC 9- Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values())
                      .filter(dailyHours => dailyHours > 0)
                      .reduce(findTotal,0);
let totalSalary = EmpDailyWageArr
                  .filter(dailyWage => dailyWage > 0)
                  .reduce(findTotal,0);
console.log("Emp Wage with Arrow: " + " Total Hours: " + totalHours + " Total Wages: " +totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => 
{
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

//UC 10 Object Creation
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr=new Array();
while(totalEmpHrs <=  MaxHours_In_A_Month && totalWorkingDays < WorkingDays)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random() * 3);
    let empHrs=WorkingHrs(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
    {
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: DailyWages(empHrs),
        toString()
        {
            return "\nDay" +this.dayNum+ "--> Working Hours :"+this.dailyHours+ " " + "And Wage Earned : "+this.dailyWage
        },
    });
}
console.log("\nUC 10 Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);



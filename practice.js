// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function displayCurrentDayAndTime (){
    const now = new Date(); //creates a new date with current date and time
    const days = ["Jumapili", "Jumatatu", "Jumanne", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = days[now.getDay()];

    //get hhours, mins, and secs
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //find out if its am/pm
    const ampm = hours >= 12 ? 'PM' : 'AM';

    //Convert to 12-hr-format
    hours = hours%12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}`: minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const currentTime = `Current time is : ${hours} ${ampm} : ${formattedMinutes} : ${formattedSeconds}`;
    const currentDay = `Today is : ${day}`;

    console.log(currentDay);
    console.log(currentTime);
}

displayCurrentDayAndTime();

//2. Write a JavaScript program to print the current window contents.
function printCurrentPage (){
    window.print();
}

//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
function calculateAreaOfTriangle (){
    const a = 5
    const b = 6
    const c = 7
    let s = (a+b+c)/2
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))

    console.log(area);
}
calculateAreaOfTriangle();

//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function leapYearDeterminant(year){
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

const testYear = 2000
if (leapYearDeterminant(testYear)){
    console.log(`${testYear} is a leap year.`);
}else {
    console.log(`${testYear} is not a leap year`);
}
console.log("++++++++++++++++");
//7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. or any other day
function tuesdayYearlyCheck(){
    for(let mwaka = 2014; mwaka <= 2050; mwaka++){
        let d = new Date (mwaka, 4, 28); //Create a Date object for the 1st January of each year
        //use the getDay() method to get the day of the week, i.e Sunday. 0 reps Sunday, 1 reps Monday, and so on
        if (d.getDay() === 2){
            console.log("28th May is Tuesday for the year: " + mwaka);
        }
    }
}
tuesdayYearlyCheck();

//calculate days remaining before Christmas
today = new Date ();
let xmas = new Date(today.getFullYear(), 11, 25)
if(today.getMonth() == 11 && today.getDate() > 25){
    xmas.setFullYear(xmas.getFullYear() +1);
}

const oneDay = 1000 * 60 * 60 * 24;
console.log(Math.ceil((xmas.getTime() - today.getTime()) / (oneDay)) + "days left until Christmas!");
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
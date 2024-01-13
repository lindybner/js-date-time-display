// Get the current date and time
const currentDate = new Date();
const hr24 = currentDate.getHours();

// Determine AM/PM and format the hour
const ampm = hr24 >= 12 ? "PM" : "AM";
const hrNoFormat = hr24 % 12 || 12;
const hr = hrNoFormat < 10 ? `0${hrNoFormat}` : `${hrNoFormat}`;

// Get and format minutes
const minNoFormat = currentDate.getMinutes();
const min = minNoFormat < 10 ? `0${minNoFormat}` : `${minNoFormat}`;

// Get and format seconds
const secNoFormat = currentDate.getSeconds();
const sec = secNoFormat < 10 ? `0${secNoFormat}` : `${secNoFormat}`;

// Get the day of the week
const dayIndex = currentDate.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = daysOfWeek[dayIndex];

// Create a string with the current day and time
const currentDayAndTime = `Today is: ${day}<br>Current time is: ${hr} ${ampm} : ${min} : ${sec}`;

// Select the HTML element for output
const output = document.querySelector("div.output");

// Display the current day and time on the webpage
output.innerHTML = currentDayAndTime;

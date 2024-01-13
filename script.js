const currentDate = new Date();
const hr24 = currentDate.getHours();
let ampm;
let hrNoFormat;
let hr;
const minNoFormat = currentDate.getMinutes();
let min;
const secNoFormat = currentDate.getSeconds();
let sec;
const dayIndex = currentDate.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = daysOfWeek[dayIndex];
let currentDayAndTime;

let output = document.querySelector("div.output");

if (hr24 >= 12) {
  ampm = "PM";
  hrNoFormat = hr24 % 12 || 12;
} else {
  ampm = "AM";
  hrNoFormat = hr24 % 12 || 12;
}

if (hrNoFormat < 10) {
  hr = "0" + hrNoFormat;
} else {
  hr = hrNoFormat;
}

if (minNoFormat < 10) {
  min = "0" + minNoFormat;
} else {
  min = minNoFormat;
}

if (secNoFormat < 10) {
  sec = "0" + secNoFormat;
} else {
  sec = secNoFormat;
}

currentDayAndTime = `Today is: ${day}<br>Current time is : ${hr} ${ampm} : ${min} : ${sec}`;

output.innerHTML = currentDayAndTime;

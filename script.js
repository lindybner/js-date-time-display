// Function to format the hour
function formatHour(hr24) {
  const ampm = hr24 >= 12 ? "PM" : "AM";
  const hrNoFormat = hr24 % 12 || 12;
  return hrNoFormat < 10 ? `0${hrNoFormat}` : `${hrNoFormat} ${ampm}`;
}

// Function to format minutes and seconds
function formatTimeComponent(component) {
  return component < 10 ? `0${component}` : `${component}`;
}

// Function to get the current day
function getCurrentDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = new Date().getDay();
  return daysOfWeek[dayIndex];
}

// Function to get the current date and time in a formatted string
function getCurrentDayAndTime() {
  const currentDate = new Date();
  const hr24 = currentDate.getHours();
  const hr = formatHour(hr24);
  const min = formatTimeComponent(currentDate.getMinutes());
  const sec = formatTimeComponent(currentDate.getSeconds());
  const day = getCurrentDay();

  return `Today is: ${day}<br>Current time is: ${hr} : ${min} : ${sec}`;
}

// Function to display the current day and time on the webpage
function displayCurrentDayAndTime() {
  const currentDayAndTime = getCurrentDayAndTime();
  const output = document.querySelector("div.output");
  output.innerHTML = currentDayAndTime;
}

// Call the function to display the current day and time
displayCurrentDayAndTime();

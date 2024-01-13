// Function to format the hour
function formatHour(hr24) {
  // Determine whether it's AM or PM based on the 24-hour format
  const ampm = hr24 >= 12 ? "PM" : "AM";
  // Calculate the hour in 12-hour format, considering 12 as the maximum
  const hrNoFormat = hr24 % 12 || 12;
  // If the hour is less than 10, add a leading zero; otherwise, just the hour
  return hrNoFormat < 10 ? `0${hrNoFormat} ${ampm}` : `${hrNoFormat} ${ampm}`;
}

// Function to format minutes and seconds
function formatTimeComponent(component) {
  // If the component is less than 10, add a leading zero; otherwise, just the component
  return component < 10 ? `0${component}` : `${component}`;
}

// Function to get the current day
function getCurrentDay() {
  // Array containing the days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Get the current day index (0 for Sunday, 1 for Monday, and so on)
  const dayIndex = new Date().getDay();
  // Return the corresponding day based on the index
  return daysOfWeek[dayIndex];
}

// Function to get the current date and time in a formatted string
function getCurrentDayAndTime() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();
  // Get the current hour in 24-hour format
  const hr24 = currentDate.getHours();
  // Format the hour using the formatHour function
  const hr = formatHour(hr24);
  // Format the minutes using the formatTimeComponent function
  const min = formatTimeComponent(currentDate.getMinutes());
  // Format the seconds using the formatTimeComponent function
  const sec = formatTimeComponent(currentDate.getSeconds());
  // Get the current day using the getCurrentDay function
  const day = getCurrentDay();

  // Return a formatted string containing the current day and time
  return `Today is: ${day}<br>Current time is: ${hr} : ${min} : ${sec}`;
}

// Function to display the current day and time on the webpage
function displayCurrentDayAndTime() {
  // Get the current day and time string using the getCurrentDayAndTime function
  const currentDayAndTime = getCurrentDayAndTime();
  // Find the HTML element with the class "output"
  const output = document.querySelector("div.output");
  // Set the inner HTML of the found element to the current day and time string
  output.innerHTML = currentDayAndTime;
}

// Call the function to display the current day and time
displayCurrentDayAndTime();

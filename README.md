# JavaScript Time Display Exercise

This is a simple JavaScript program that displays the current day and time in a specified format.

Exercise: Write a JavaScript program to display the current day and time in the following format (see Example Output).

## Functionality

The program accomplishes the following:

- Retrieves the current day of the week.
- Gets the current time in 24-hour format.
- Converts the 24-hour time to a 12-hour format and includes AM/PM indicators.
- Displays the formatted output.

## Example Output

`Today is: Tuesday`

`Current time is: 3 PM : 30 : 45`

## Techniques Used

1. **Functions:** The code is organized into several functions, each serving a specific purpose. This promotes code modularity and reusability.

2. **Conditional (Ternary) Operator:** The ternary operator (`condition ? expr1 : expr2`) is used to determine whether it's AM or PM in the `formatHour` function.

3. **Modulus Operator:** The modulus operator (`%`) is used to calculate the remainder when dividing by 12 in the `formatHour` function.

4. **Template Literals:** Template literals (backticks ``) are used for string interpolation in the return statements, allowing the easy inclusion of variables within strings.

5. **Array:** An array (`daysOfWeek`) is used to store the names of days of the week. The `getCurrentDay` function retrieves the current day based on the day index.

6. **Date Object:** The `Date` object is used to get the current date and time. Various methods of this object, such as `getHours()`, `getMinutes()`, `getSeconds()`, and `getDay()`, are employed.

7. **DOM Manipulation:** The script manipulates the Document Object Model (DOM) by selecting an HTML element with the class "output" and updating its inner HTML to display the current day and time.

8. **Query Selector:** The `document.querySelector` method is used to select an HTML element based on its CSS selector.

9. **Event Invocation:** The last line of code calls the `displayCurrentDayAndTime` function to initiate the process of displaying the current day and time on the webpage.

10. **Logical OR (||) Operator:** The logical OR operator is used in the `formatHour` function to provide a default value of 12 when the remainder is 0, ensuring that midnight (00:00) is displayed as 12 AM.

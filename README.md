# Simple Calculator Web Application

This project is a basic calculator web application built using HTML, CSS, and JavaScript. It provides a user-friendly interface for performing arithmetic calculations.

## Features

* **Basic Arithmetic Operations:** Supports addition (+), subtraction (-), multiplication (x), division (/), and percentage (%).
* **Clear and Delete Functionality:** Allows users to clear the input screen (AC) and delete the last entered character (DEL).
* **Input Display:** Displays the input and results in a text input field.
* **User-Friendly Interface:** Provides a clean and intuitive design with clickable buttons.

## Technologies Used

* **HTML:** For structuring the web page.
* **CSS:** For styling the calculator's appearance.
* **JavaScript:** For handling user interactions and performing calculations.

## Project Structure

├── index.html
├── style.css
└── script.js

* `index.html`: Contains the HTML structure of the calculator.
* `style.css`: Contains the CSS styles for the calculator's appearance.
* `script.js`: Contains the JavaScript logic for the calculator's functionality.

## How to Use

1.  Clone the repository to your local machine.
2.  Open the `index.html` file in a web browser.
3.  Use the buttons to input numbers and operators.
4.  Click the "=" button to calculate the result.
5.  Click the "AC" button to clear the input.
6.  Click the "DEL" button to delete the last character.

## Key JavaScript Functionality

* **`clearScreen()`:** Clears the input field.
* **`display(val)`:** Appends the clicked button's value to the input field.
* **`del()`:** Deletes the last character from the input field.
* **`calculate()`:** Evaluates the expression in the input field using the `eval()` function and displays the result.

## CSS Styling Details

* The calculator has a gradient background and a bordered container.
* Input field and buttons have a transparent background with box shadows.
* The "=" button has a distinct orange background.
* Operator buttons have a green color.
* Font from Google Fonts is used.

## Potential Improvements

* **Error Handling:** Implement error handling for invalid input (e.g., division by zero).
* **Advanced Operations:** Add support for more advanced mathematical functions.
* **Memory Functions:** Add memory functions (e.g., M+, M-, MR, MC).
* **Responsive Design:** Make the calculator responsive for different screen sizes.
* **Security:** Avoid using eval() due to security concerns, implement a safer parsing method.
* **Keyboard Support:** Add keyboard support for input.
* **Theming:** Add the option to change themes.

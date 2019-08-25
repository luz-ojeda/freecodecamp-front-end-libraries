# JavaScript Calculator

 ## [Codepen](https://codepen.io/lezojeda/pen/JjPXPpP)

Project for the FreeCodeCamp ["Build a JavaScript Calculator"](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator) challenge from the Front End Libraries section.
The project consists of several react components wrapped inside one (Presentational) connected to a redux store.

The components wrapped are:

* Display: receives input, operation and results as props and displays the last input (props.input) in a first div (#display-input) and the operation (props.operation) in a second div (#display) which after clicking the = button (or pressing the key in the keyboard) displays the result and continues a new operation in this result if desired.

* NumPad: receives input and the functions addFirstNumber_dispatched, addNewNumber, addNewDecimal and addNewZero as props. Contains the numbers 0 through 9 and the decimal. It also contains the method handleNumPadClick(e) which controls the functionality of clicking around the NumPad (e.g. if the event target value is 0, execute addNewZero())



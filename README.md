# Intermediate-Web-Design-Programming-Mid-Semester-Exam

# Section A
# 1.A
# 2.C
# 3.C
# 4.B
# 5.B
# 6.A
# 7.A
# 8.C

# Section B
# 1. Difference between let, const, and var in JavaScript
 var is function-scoped, allows reassignment and redeclaration,  It should generally be avoided due to unpredictable behavior in block scopes.
let is block-scoped, allows reassignment but not redeclaration .It is used when the variable's value will change.
const is block-scoped, cannot be reassigned or redeclared. It is used for constants or values that shouldn’t change

# 2.What are JavaScript objects, and how are they different from arrays?
A javascript  object is a collection of key-value pairs where each key is a string that maps to a value.
- Objects are designed for storing key-value pairs, while Arrays are designed for storing collections of data.
- Objects are unordered while arrays are ordered..



 # 3.Explain the difference between == and === in JavaScript.
== is a loose equality which just checks if the values are equal and === is a strict equality which checks for equality and  the datatype.

# 4 .What is an event in JavaScript? Provide an example of how to handle a button click event.
An event in JavaScript is an action or occurrence detected by the browser, such as clicks, key presses, mouse movements, or form submissions.
// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  console.log('Button clicked!');
  alert('Button clicked!');
});


# 5. Describe the forEach and map methods in JavaScript. How are they similar, and how do they differ?
# How they are similar 
Both methods treat the array-like object as an array allowing one to work with array-like objects, such as the HTML collections.
# How they differ;
forEach returns undefined, while map returns a new array with the transformed elements.
forEach is typically used when you need to perform an action for each element in the array, such as logging or modifying external state. map is used when you need to transform the elements of the array and return a new array.




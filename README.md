# Unexpected Type Coercion in JavaScript Addition

This repository demonstrates a common JavaScript bug related to type coercion during addition.  When adding a number and a string, JavaScript will implicitly convert the number to a string and perform string concatenation instead of numerical addition. This can lead to unexpected results and logic errors in your code.

## The Bug
The `bug.js` file contains a function `foo` that attempts to add a number and a string.  The output is unexpected because of JavaScript's loose typing and type coercion behavior.

## The Solution
The `bugSolution.js` file provides a corrected version of the function.  It explicitly converts both arguments to numbers before performing the addition, ensuring the expected numerical result.

This example highlights the importance of careful type handling in JavaScript to prevent unexpected behavior and maintain code correctness.
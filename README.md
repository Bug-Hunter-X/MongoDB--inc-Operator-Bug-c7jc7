# MongoDB $inc Operator Bug
This repository demonstrates a common error related to the MongoDB `$inc` operator. The `$inc` operator is used to increment or decrement a numerical field in a document.  However, improper usage, particularly with non-numeric values or incorrect type handling, can result in unexpected behavior and data corruption.
The `bug.js` file contains code exhibiting this error. The `bugSolution.js` file provides the corrected implementation, illustrating the proper handling of the `$inc` operator.
## Bug Description
The `$inc` operator only works correctly with numeric fields.  Attempting to increment a non-numeric field (e.g., a string) will not produce an error but could lead to unexpected results in the database. This could also occur if the field's type is not strictly numeric or if type coercion is not properly handled in the application code.
## Solution
The solution involves ensuring that the field being incremented is of a numeric type and verifying data type before using $inc.
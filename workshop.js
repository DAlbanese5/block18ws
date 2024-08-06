// Unit Tests:
// A function called "multiplication" that returns the product of the two input numbers.
function multiplication(a, b) {
    return a * b
}

// A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
// Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
// ...should result in [-1, 1, 3, 9, 15]
// Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave:
// What should happen with unexpected inputs?
// What kinds of unexpected inputs should we worry about?
// What should happen when there are multiples of the same odd number in the arrays? (Hint: We gave you the answer to this one in the example above.)

function concatOdds(c, d) {
const joinedArray = c.concat(d);
return joinedArray.filter(num => (num % 2) !== 0);     
}

//Multiplication section

// Expect multiplication(2, 3) to be a number
// Expect multiplication(2, 3) to be equal to 6
// Expect multiplication("a", 3) to be an error

// concatOdds section 

// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be an array
// Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [3, 1, 9, 1, 1, 1, 15, -1]
// Expect concatOdds([ 2 ], [ 4, 6, 8 ]) to be []


// Grocery Functional Assignemnt 

// If a user cart is empty, it should prompt the user to return to shopping 
// If a user cart has at least 1 item in it, it should ask the user if they are ready to check out or continue shopping
// When a user is ready to checkout, they should click on checkout
// When a user is checking out, it should show them the total price plus tax
// When a user is checking out, it should ask for curb-side, pick-up inside or delivery?
// No matter the option chose, it should return a time and date when the groceries will be ready to be picked up or will be delivered on



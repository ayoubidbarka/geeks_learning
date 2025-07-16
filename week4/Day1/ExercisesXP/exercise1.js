// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3; // 'a' changes from 5 to 3 inside this block
    }
    alert(`inside the funcOne function ${a}`); 
    // Prediction: alerts "inside the funcOne function 3"
}
// #1.2 If 'a' was declared with const instead of let:
// Then a = 3; would cause a TypeError because const variables cannot be reassigned.

//#2
let a = 0;
function funcTwo() {
    a = 5; // changes global 'a' to 5
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 Run in console:
// funcThree() alerts "inside the funcThree function 0" (initial value)
// funcTwo() changes 'a' to 5
// funcThree() alerts "inside the funcThree function 5"

// #2.2 If 'a' was declared with const instead of let:
// Assignment a=5 in funcTwo() would cause a TypeError because const variables cannot be reassigned.

//#3
function funcFour() {
    window.a = "hello"; // sets global variable 'a' on the window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 Run in console:
// funcFour() sets window.a = "hello"
// funcFive() alerts "inside the funcFive function hello"

//#4
let a = 1;
function funcSix() {
    let a = "test"; // local variable shadows outer 'a'
    alert(`inside the funcSix function ${a}`);
}

// #4.1 Run in console:
// funcSix() alerts "inside the funcSix function test"

// #4.2 If the variable was declared with const instead of let inside funcSix:
// The behavior is the same since 'a' is not reassigned.
// alert will still show "test".

//#5
let a = 2;
if (true) {
    let a = 5; // block scoped variable shadows outer 'a'
    alert(`in the if block ${a}`); // alerts 5
}
alert(`outside of the if block ${a}`); // alerts 2

// #5.2 If 'a' inside the if block was declared const instead of let:
// Same behavior: block scoped, can't be reassigned, alerts remain the same.

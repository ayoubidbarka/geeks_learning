//1 
let user = prompt("Enter a number:");
let number = Number(user);

while (isNaN(number) || number < 10) {
  user = prompt("Number too small! Please enter a new number (>= 10):");
  number = Number(user);
}

console.log("Thank you! The number is", number);

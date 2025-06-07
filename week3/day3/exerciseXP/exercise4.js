function hotelCost() {
  let nights;

  do {
    nights = prompt("How many nights would you like to stay at the hotel?");
  } while (isNaN(nights) || nights.trim() === "");

  return Number(nights) * 140;
}
function planeRideCost() {
  let destination;

  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination.trim() === "");

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  else if (destination === "paris") return 220;
  else return 300;
}
function rentalCarCost() {
  let days;

  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days.trim() === "");

  days = Number(days);
  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; 
  }

  return cost;
}
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return hotel + plane + car;
}

totalVacationCost();



function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  else if (destination === "paris") return 220;
  else return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}
function totalVacationCost() {
  let nights, days, destination;

  do {
    nights = prompt("How many nights would you like to stay at the hotel?");
  } while (isNaN(nights) || nights.trim() === "");

  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination.trim() === "");

  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days.trim() === "");

  nights = Number(nights);
  days = Number(days);

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return hotel + plane + car;
}

totalVacationCost();

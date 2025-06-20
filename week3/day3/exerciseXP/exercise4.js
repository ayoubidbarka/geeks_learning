function hotelCost() {
  let nights;
  do {
    nights = prompt('combien de jours tu veux à hotel');
    nights = Number(nights);
  } while (isNaN(nights) || nights <= 0);

  const pricePerNight = 140;
  return nights * pricePerNight;
}

function planeRideCost() {
  let destination;

  do {
    destination = prompt('quelle votre (destination)?');
  } while (!destination || typeof destination !== "string" || destination.trim() === "");

  destination = destination.trim().toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost() {
  let days;
  do {
    days = prompt('commbien de jours tu veux cette voiture');
    days = Number(days);
  } while (isNaN(days) || days <= 0);

  let cost = days * 40;

  if (days > 10) {
    cost *= 0.95; 
  }

  return cost;
}
function totalVacationCost() {
  const carCost = rentalCarCost();
  const hotelCostTotal = hotelCost();
  const planeCost = planeRideCost();

  console.log(`The car cost: $${carCost}`);
  console.log(`The hotel cost: $${hotelCostTotal}`);
  console.log(`The plane tickets cost: $${planeCost}`);

  return carCost + hotelCostTotal + planeCost;
}
totalVacationCost()








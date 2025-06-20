const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ['banana', 'orange','apple']
function myBill(){
  let total = 0 ;
  for (let item of shoppingList){
     if (shoppingList in stock && stock[shoppingList]>0 ){
      total += prices[item]; 
      stock[item] -= 1; 
    }
  }
  return total
}
  
const bill = myBill();
console.log("Total price:", bill);
console.log("Remaining stock:", stock);
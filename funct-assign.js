// Create an array containing the names of all items in the inventory
let inventoryItems = ['Apple', 'Mangoe', 'Lemon', 'Ovacado'];
// Create a separate array with the corresponding stock quantities of each item
let inventoryQuantities = [150, 210, 315, 235];
// Write a function to add a new item to the inventory, updating both arrays
function addItem(name, quantity) {
  inventoryItems.push(name);
  inventoryQuantities.push(quantity);
}
addItem("Orange",170);
console.log(inventoryItems);
console.log(inventoryQuantities);
// Write a function to update the stock quantity of an existing item
function updateItemQuantity(name, quantity) {[]
  const index = inventoryItems.indexOf(name);
  if (index !== -1) {
    inventoryQuantities[index] = quantity;
  }
  else{
    console.log("The item is not found");
  }
}
updateItemQuantity("Lemon",120)
console.log(inventoryQuantities)
// Write a function to calculate the total number of items in the inventory
function getTotalItems() {
  let total = 0;
  for (let i = 0; i < inventoryItems.length; i++) {
    total += inventoryQuantities[i];
  }
  return total;
}
console.log(getTotalItems())
// Write a function to find the item with the lowest stock quantity
function LowestStockItem() {
  let min=Math.min(...inventoryQuantities)
  let index=inventoryQuantities.indexOf(min)
  console.log(inventoryItems[index]);
}
LowestStockItem()








   
   

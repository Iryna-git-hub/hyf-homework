console.log("I love pizza");

let pizzaName = "Margarita";
let pizzaPrice = 135;

// console.log("New pizza order: " + pizzaName + ".\nThe price of the pizza is: " + pizzaPrice + " DKK");

let pizzaAmount = 7;
let pizzaFamilySize = false;

let pizzaType;
if(pizzaFamilySize)
{
    pizzaPrice = pizzaPrice * 2;
    pizzaType = " family ";
}
else pizzaType = " normal ";

let totalPrice = pizzaAmount * pizzaPrice;



console.log("New pizza order: \n" + pizzaAmount + pizzaType + pizzaName + ".\n" + "Total cost for the order: " + totalPrice + " DKK");

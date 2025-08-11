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


// JS1 homework Step 3
// #1
console.log("Hello, World");
console.log("Привет, Мир");
console.log("Привіт, Мир");
console.log("Hey, Verden");

// #2
const roundNumber = Math.round(7.25);
console.log(roundNumber);

// #3
let emptyArray = [];
console.log("I think that the array represents a scope of data.");
console.log(emptyArray);


let myFavoriteAnimals = ["bird", "humster" , "bunny"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log(myFavoriteAnimals);

// #3.1

// Age-ify (A future age calculator)

let yearOfBirth = 1983;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in 2027");


// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2024;
let dogYearFuture = 2030;
let dogYear;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears)
{
    dogYear = (dogYearFuture - dogYearOfBirth) * 7 + " dog ";
}
else dogYear = dogYearFuture - dogYearOfBirth + " human ";

console.log("Your dog will be " + dogYear + "years old in 2027");


// Housey pricey (A house price estimator)

// Peter
{
let houseWidth = 8;
let houseDeep = 10;
let houseHight = 10;
let gardenSizeInM2 = 100;
let factHousePrice = 2500000;

let volumeInMeters = houseWidth * houseDeep * houseHight;
let housePrice;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);

let housePriceDifference = factHousePrice - housePrice;
let modulePriceDifference;

if(housePriceDifference > 0)
{
    modulePriceDifference = housePriceDifference.toLocaleString("da-DK") + " above the market price.";
} 
else if(housePriceDifference < 0)
{
    modulePriceDifference = Math.abs(housePriceDifference).toLocaleString("da-DK") + " below the market price.";
}   
else
    modulePriceDifference = "the market price.";

console.log("Peter pays " + modulePriceDifference);
}

// Julia
{
let houseWidth = 5;
let houseDeep = 11;
let houseHight = 8;
let gardenSizeInM2 = 70;
let factHousePrice = 1000000;

let volumeInMeters = houseWidth * houseDeep * houseHight;
let housePrice;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log(housePrice);

let housePriceDifference = factHousePrice - housePrice;
let modulePriceDifference;

if(housePriceDifference > 0)
{
    modulePriceDifference = housePriceDifference.toLocaleString("da-DK") + " above the market price.";
} 
else if(housePriceDifference < 0)
{
    modulePriceDifference = Math.abs(housePriceDifference).toLocaleString("da-DK") + " below the market price.";
}   
else
    modulePriceDifference = "the market price.";

console.log("Julia pays " + modulePriceDifference);
}

// Ez Namey (Startup name generator) Optional

{
const firstWords = ["Easy", "Awesome", "Corporate", "Bright", "Agile", "Bold", "Clever", "Infinite", "Smart", "Next"];
const secondWords = ["Solutions", "Systems", "Labs", "Ventures", "Tech", "Works", "Innovations", "Hub", "Factory", "Flow"];
const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + secondWords[randomNumber];

console.log(startupName);


}














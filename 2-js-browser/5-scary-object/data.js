const coffees = [
  { _id: 1, name: 'Americano', price: 2.99 },
  { _id: 2, name: 'Espresso', price: 2.99 },
  { _id: 3, name: 'Frappucchino', price: 2.99 },
  {
    _id: 4,
    name: 'Latte Macchiato',
    price: 2.99,
    toppings: [ { flavor: 'caramel', upsell: 0.5 }, { flavor: 'vanilla', upsell: 0 }, { flavor: 'choco', upsell: 1 } ]
  }
];

// STATIC data querying
// console.log( coffees[3].toppings[2].upsell )

// DYNAMIC data querying

const getCoffeePrice = (coffeeName, toppingName) => {
  const objCoffeeFound = coffees.find( (coffee) => {
    return coffee.name === coffeeName;
  });

  // error case 1: Coffee not found
  if(!objCoffeeFound) {
    console.log("EY! Den Kaffee jibts so nich! Andere Wahl bitte" )
    return
  }

  // error case 2: toppings does not exist on coffee
  if(!objCoffeeFound.toppings) {
    console.log("EY! Dieses Topping musst du woanders kaufen! ")
    return
  }
  const chocoTopping = objCoffeeFound.toppings.find((topping) => {
    return topping.flavor == toppingName;
  });
  return objCoffeeFound.price + chocoTopping.upsell
};

const totalPrice = getCoffeePrice( "Latte Macchiato", "choco" )
const totalPrice2 = getCoffeePrice( "Espresso", "choco" )

console.log('Total price:', totalPrice);

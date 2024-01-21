// 

const prompt = require("prompt-sync")();

const myCakeFlavours = [
    { id: "1", name: "Vanilla", price: 2000 },
    { id: "2", name: "Chocolate", price: 3000 },
    { id: "3", name: "Strawberry", price: 2000 },
    { id: "4", name: "Red Velvet", price: 3000},
    { id: "5", name: "Carrot Cake", price: 3500 },
    { id: "6", name: "Fruit Cake", price: 4000 },
  ];
  
  const frosting = [
      {id:"1",name: "Buttercream", price: 2500},
      {id:"2",name: "Whippedcream", price: 4500},
      {id:"3",name: "Cheesecream", price: 5500},
      {id:"4",name: "Fondant", price: 3500},
  ];
  
  let cart = []
  let total = 0;
  
  console.log(`Welcome to Ellie's Cake's N' Treats.`);
  console.log(`Our delicious cakes come in the flavours listed below.`);
  
  // Display available cake flavors
  myCakeFlavours.forEach(function (item) {
    console.log(`${item.id}. \t ${item.name} \t\t - \t\t ${item.price}`);
  });
  
  // Prompt user to choose cake flavor
  let flavourChoice = prompt("Enter the number of your desired cake flavor:",1
  );
  
  // Validate user input for cake flavor
  if (flavourChoice && myCakeFlavours[flavourChoice - 1]) {
    // Add chosen cake flavor to cart
    cart.push(myCakeFlavours[flavourChoice - 1].name);
  
    // Display chosen cake flavor
    console.log(`You chose: ${myCakeFlavours[flavourChoice - 1].name}`);
  
    // Display available frosting options
    console.log(`Next, make your choice of frosting for your cake`);
    frosting.forEach(function (icing) {
      console.log(`${icing.id}. \t ${icing.name} \t\t - \t\t ${icing.price}`);
    });
  
    // Prompt user to choose frosting
    let frostingChoice = prompt("Enter the number of your desired frosting:");
  
    // Validate user input for frosting
    if (frostingChoice && frosting[frostingChoice - 1]) {
      // Add chosen frosting to cart
      cart.push(frosting[frostingChoice - 1].name);
  
      // Display chosen frosting
      console.log(`You chose ${frosting[frostingChoice - 1].name} frosting.`);
  
      // Calculate the total price
      total = myCakeFlavours[flavourChoice - 1].price + frosting[frostingChoice - 1].price;
      
  
      // Display items in the cart and the total
      console.log("Items in your cart:");
      cart.forEach(function (item) {
        console.log(item);
        console.log(`Your total is: ${total} Naira.`);
      });
    } else {
      console.log("Invalid frosting choice. Please run the program again.");
    }
  } else {
    console.log("Invalid cake flavor choice. Please run the program again.");
  }
  
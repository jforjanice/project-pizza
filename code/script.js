
// Step 1 - Welcome and introduction
alert(
  `Welcome to our pineapple JS Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt(`What is your name?`);

alert(
  `Hi ${userName}! Don't worry, we don't judge you like pineapple on your pizza here:)`)

// Step 2 - Food choice
// Request information of what the customer would like to order
// User alert to confirm customer's choice
// I could't make it work in the beginning because I skipped "" for the number

alert(
  `What would you like to order?`
)

const mainMenu = prompt(`Please select:
  1 - Pizza
  2 - Pasta
  3 - Salad`);

let selectedMenu = "";

  if (mainMenu === "1"){
    selectedMenu = "Pizza";
  }
  else if (mainMenu === "2" ){
    selectedMenu = "Pasta";
  }
  else if (mainMenu === "3"){
    selectedMenu = "Salad";
  }
  else{
    alert(`Please select again.`);
    process.exit(1);
  }
alert (`You have selected ${selectedMenu}.`)

// Step 3 - Subtype choice
// Initiate an array to store different menu
let foodName = "";
let selectedChoice = "";

//select pizza
switch (selectedMenu) {
  case "Pizza":
    foodName = prompt (`Which pizza would you like to order?
    1 - Signature Hawaiian
    2 - Nodic Smoked Salmon Pizza
    3 - Kabab Pizza
    4 - Kimchi BBQ Chicken Pizza
    Please select the number of your choice`);
    selectedChoice = ["Signature Hawaiian", "Nodic Smoked Salmon Pizza", "Kabab Pizza", "Kimchi BBQ chicken pizza"];
    break;
  case "Pasta":
    foodName = prompt (`Which pasta would you like to order?
    1 - Spicy Garlic Butter Linguini
    2 - Spaghetti Chicken Teriyaki
    3 - Cheesy Taco Pasta Bake
    Please select the number of your choice`);
    selectedChoice = ["Spicy Garlic Butter Linguini", "Spaghetti Chicken Teriyaki", "Cheesy Taco Pasta Bake"];
    break;
  case "Salad":
    foodName = prompt (`Which salad would you like to order?
    1 - Tropical Mango Salad
    2 - Vietnamese Rice Noodle Salad with Chicken
    3 - Caesar Salad with BBQ chicken
    Please select the number of your choice`);
    selectedChoice = ["Tropical Mango Salad", "Vietnamese Rice Noodle Salad with Chicken", "Caesar Salad with BBQ chicken"];
    break; 
    //Error message will be shown if invalid input is selected  
  default:
    alert("Please select again.");
    process.exit(1);
}
// Display selected choice according to user choice
// I have problem of displaying the selected choice at the confirmation message. 
// It showed the whole array instead of the selected choice according to its position.
// I learned from another classmate at the her demo, I can store the user's choice at this step.
// It works! 
 
let selectedFood = selectedChoice[foodName-1];
alert(`You have selected ${selectedFood}}.`);

// Below is the original code I wrote, I updated with the above method which I learnt from my team
// if (foodName === "1"){
//   // if (foodName === "1"){
//   alert(`You have selected ${selectedChoice [0]}.`);
//   selectedFood =  selectedChoice [0] ;
// }
// else if (foodName === "2"){
//   alert(`You have selected ${selectedChoice [1]}.`);
//   selectedFood =  selectedChoice [1] ;
// }
// else if (foodName === "3"){
//   alert(`You have selected ${selectedChoice [2]}.`);
//   selectedFood =  selectedChoice [2] ;
// }
// else if (foodName === "4"){
//   alert(`You have selected ${selectedChoice [3]}.`);
//   selectedFood =  selectedChoice [3] ;
// }


// Step 4 - Age
// Set food price
// I only use let and switch here which I don't think is the optimal solution
// In my head the price should go together with the food choice as an object
// But I don't know how to create object yet so I solve it with this solution
let price = "";
switch(selectedMenu){
  case "Pizza":
    price = "110";
   break;
  case "Pasta":
    price = "130";
    break;
  case "Salad":
    price = "120";
    break;
}

//Lazy solution to set the price for half portion
let childPrice = price/2;

// Get user age with promt function
// Use if else to change the price if the user order for a kid
let userAge = prompt (`Is this an order for a child or an adult? Please enter the age.`);

  if(userAge >= 18){
    alert(`You have selected ${selectedFood}, and the total will be ${price}kr.`);
  } else if(userAge <= 18){
    alert(`You have selected ${selectedFood}, and the total will be ${childPrice}kr.`);
  } else {
    alert(`Please select again.`);
    process.exit(1);
  }
  // Step 5 - Order confirmation
  let confirmation = prompt(`Do you confirm your order? Please enter the number:
  1 - Yes
  2 - No `);
  // Triger different action according to user last answer

    if (confirmation === "1"){
      alert(`Thank you! Your order confirmation will be send to your email shortly.`);
    }
    else if (confirmation === "2"){
      alert(`Please select your order again.`)
      process.exit(1);
    }



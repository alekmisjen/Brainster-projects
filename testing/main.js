// let activeCategories = new Set();

// // Function to create button pills based on categories
// function createButtonPills(categories) {
//   // Get the container where buttons will be appended
//   const pillsDiv = document.querySelector("#pills");

//   if (!pillsDiv) {
//     console.error("Container with id 'pills' not found.");
//     return;
//   }

//   // Loop through each category and create a button
//   categories.forEach((category) => {
//     const button = document.createElement("button");
//     button.textContent = category; // Set the button text to the category name
//     button.addEventListener("click", () => {
//       toggleCategory(category);
//     });
//     pillsDiv.appendChild(button); // Append the button to the container
//   });
// }

// // Function to aggregate unique categories
// function getUniqueCategories(cards) {
//   const categorySet = new Set();

//   cards.forEach((card) => {
//     card.categories.forEach((category) => {
//       categorySet.add(category);
//     });
//   });

//   return Array.from(categorySet);
// }

// // Function to toggle category filter
// function toggleCategory(category) {
//   if (activeCategories.has(category)) {
//     activeCategories.delete(category);
//   } else {
//     activeCategories.add(category);
//   }
//   displayCardsByCategories();
// }

// // Function to display cards by active categories
// function displayCardsByCategories() {
//   const cardsContainer = document.querySelector("#cardsContainer");

//   // Clear previous cards
//   cardsContainer.innerHTML = "";

//   if (activeCategories.size === 0) {
//     // Display all cards if no category is selected
//     cards.forEach((card) => createCardElement(cardsContainer, card));
//   } else {
//     // Filter and display cards that match any of the active categories
//     const filteredCards = cards.filter((card) =>
//       card.categories.some((category) => activeCategories.has(category))
//     );
//     filteredCards.forEach((card) => createCardElement(cardsContainer, card));
//   }
// }

// // Helper function to create card elements
// function createCardElement(container, card) {
//   const cardElement = document.createElement("div");
//   cardElement.className = "card";
//   cardElement.innerHTML = `
//     <img src="${card.image}" alt="${card.title}" />
//     <h3>${card.title}</h3>
//     <p>${card.description}</p>
//   `;
//   container.appendChild(cardElement);
// }

// // Ensure the cards object is loaded before calling the function
// if (typeof cards !== "undefined") {
//   const uniqueCategories = getUniqueCategories(cards);
//   console.log("Unique categories found:", uniqueCategories); // Add a console log to confirm unique categories
//   createButtonPills(uniqueCategories);
//   displayCardsByCategories(); // Display all cards initially
// } else {
//   console.error("Cards data not loaded properly.");
// }
import { hideAllSections } from "./helperRouting.js";
function handleRoute() {
  const currentHashRoute = location.hash.slice(1);
  hideAllSections();

  switch (currentHashRoute) {
    case "home": {
      document.querySelector("#home").style.display = block;
      break;
    }
    case "login": {
      document.querySelector("#login").style.display = block;
      break;
    }
    default: {
      document.querySelector("#home").style.display = block;
      break;
    }
  }
}
window.addEventListener("hashchange", () => {
  console.log(`has route changed to ${location.hash}`);
});

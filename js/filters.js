const FILTER_STORAGE_KEY = "activeFilters";
let activeCategories = new Set();
function isUserAuthenticated() {
  return Boolean(sessionStorage.getItem(USERNAME_STORAGE_KEY));
}
//save active categories to session storage
function saveActiveCategories() {
  if (isUserAuthenticated()) {
    sessionStorage.setItem(
      FILTER_STORAGE_KEY,
      JSON.stringify([...activeCategories])
    );
  }
}
//load active categories frmo storage
function loadActiveCategories() {
  if (isUserAuthenticated()) {
    const savedCategories = JSON.parse(
      sessionStorage.getItem(FILTER_STORAGE_KEY)
    );
    if (savedCategories && savedCategories > 0) {
      activeCategories = new Set(savedCategories);
    }
  }
}
function createButtonPills(categories) {
  // Get the container where buttons will be appended
  const pillsDiv = document.querySelector("#pills");

  // Loop through each category and create a button
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category; // Set the button text to the category name
    button.classList.add("custom-btn");
    button.addEventListener("click", () => {
      toggleCategory(category, button);
      //console.log(`Button ${category} clicked`);
      //location.hash = `category/${tag}`;
    });
    pillsDiv.appendChild(button); // Append the button to the container
  });
}
function toggleCategory(category, button) {
  if (activeCategories.has(category)) {
    activeCategories.delete(category);
    button.classList.remove("active");
  } else {
    activeCategories.add(category);
    button.classList.add("active");
  }
  saveActiveCategories();
  displayCardsByCategory();
}
function displayCardsByCategory() {
  // const cardList = document.querySelector("#cards-container");

  cardList.innerText = "";

  if (activeCategories.size === 0) {
    cards.forEach((card) => renderCard(card));
  } else {
    const filteredCards = cards.filter((card) =>
      card.categories.some((category) => activeCategories.has(category))
    );
    console.log(filteredCards);
    filteredCards.forEach((filteredCard) => {
      const showCard = renderCard(filteredCard);
      cardList.appendChild(showCard);
    });
  }
}
// Function to aggregate unique categories
function getUniqueCategories(cards) {
  const categorySet = new Set();

  cards.forEach((card) => {
    card.categories.forEach((category) => {
      categorySet.add(category);
    });
  });

  return Array.from(categorySet);
}

/// Ensure the cards object is loaded before calling the function
if (typeof cards !== "undefined") {
  loadActiveCategories();
  const uniqueCategories = getUniqueCategories(cards);
  console.log("Unique categories found:", uniqueCategories); // Add a console log to confirm unique categories
  createButtonPills(uniqueCategories);
  displayCardsByCategory(); // Display all cards initially
} else {
  console.error("Cards data not loaded properly.");
}

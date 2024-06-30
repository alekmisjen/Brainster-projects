//pages
const homePage = document.querySelector("#home");
const contentPage = document.querySelector("#content");
const discussionPage = document.querySelector("#discussion");
const contactPage = document.querySelector("#contact");
const profilePage = document.querySelector("#profile");
const loginPage = document.querySelector("#login");

const cardList = document.querySelector("#cards-container");

const loginForm = document.querySelector("#login-form");

const loginLink = document.querySelector(".login-link");
const profileLink = document.querySelector(".profile-link");

const logoutBtn = document.querySelector("#logout-btn");

const USERNAME_STORAGE_KEY = "currentUsername";

let activeCategories = new Set();

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
  displayCardsByCategory();
}
function displayCardsByCategory(category) {
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
  const uniqueCategories = getUniqueCategories(cards);
  console.log("Unique categories found:", uniqueCategories); // Add a console log to confirm unique categories
  createButtonPills(uniqueCategories);
  displayCardsByCategory(); // Display all cards initially
} else {
  console.error("Cards data not loaded properly.");
}

function renderCard(card) {
  const container = document.createElement("div");
  container.classList.add("content-card", "mb-3");
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = card.image;
  const overlay = document.createElement("div");
  overlay.classList.add("card-overlay");
  const title = document.createElement("h3");
  title.innerText = card.title;
  title.classList.add("p-3");
  const desc = document.createElement("p");
  desc.innerText = card.description;
  desc.classList.add("px-3");

  overlay.append(title, desc);
  cardImage.appendChild(img);
  container.append(cardImage, overlay);

  return container;

  // cardList.innerHTML += `

  // <div class="content-card mb-3">
  //             <div class="card-image">
  //               <img src="${card.image}" alt="${card.title}" />
  //             </div>
  //             <div class="card-overlay">
  //               <h3 class="p-3">${card.title}</h3>
  //               <p class="px-3">${card.description}
  //               </p>
  //             </div>
  //           </div>

  //           `;
}
cards.forEach((card) => {
  const showCard = renderCard(card);
  cardList.append(showCard);
});

function isUserAuthenticated() {
  return Boolean(localStorage.getItem(USERNAME_STORAGE_KEY));
}
function onLogout() {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(USERNAME_STORAGE_KEY);
    onLogin();
    location.has = "";
  });
}
function onLogin() {
  const isAuthenticated = isUserAuthenticated();
  if (isAuthenticated) {
    loginLink.style.display = "none";
    profileLink.style.display = "block";
    logoutBtn.style.display = "block";
    onLogout();
  } else {
    loginLink.style.display = "block";
    profileLink.style.display = "none";
    logoutBtn.style.display = "none";
  }
}
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  //console.log(username);
  const password = document.querySelector("#password").value;
  //console.log(password);
  fetch("http://localhost:5000/api/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((_) => {
      localStorage.setItem(USERNAME_STORAGE_KEY, username);
      onLogin();
      location.hash = "home";
      //console.log("success");
    })
    .catch((error) => {
      console.log(`failure - ${error}`);
      alert("invalid credentials.");
    });
});
function handleRoute() {
  const currentHashRoute = location.hash.slice(1);
  switch (currentHashRoute) {
    case "": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";
      //profileLink.style.display = "none";

      break;
    }
    case "home": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";
      //loginLink.style.display = "none";
      //profileLink.style.display = "block";

      break;
    }
    case "content": {
      homePage.style.display = "none";
      contentPage.style.display = "block";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";

      break;
    }

    case "discussion": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "block";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";

      break;
    }
    case "contact": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "block";
      profilePage.style.display = "none";
      loginPage.style.display = "none";

      break;
    }
    case "profile": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "block";
      loginPage.style.display = "none";

      break;
    }
    case "login": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "block";
      break;
    }
    default:
      location.hash = "";
  }
}
// Handling login form

window.addEventListener("load", () => {
  handleRoute();
  onLogin();
});

window.addEventListener("hashchange", () => {
  handleRoute();
});

//pages
const homePage = document.querySelector("#home");
const contentPage = document.querySelector("#content");
const discussionPage = document.querySelector("#discussion");
const contactPage = document.querySelector("#contact");
const profilePage = document.querySelector("#profile");
const loginPage = document.querySelector("#login");

const cardList = document.querySelector("#cards-container");

const videoDetails = document.querySelector("#video-details");

const loginForm = document.querySelector("#login-form");

const loginLink = document.querySelector(".login-link");
const profileLink = document.querySelector(".profile-link");

const logoutBtn = document.querySelector("#logout-btn");

const profileForm = document.querySelector("#profile-form");
const profileUsername = document.querySelector("#profileUsername");

const profileEmailInput = document.querySelector("#profile-email");
const birthYearInput = document.querySelector("#birth-year");
const updateEmail = document.querySelector("#update-email");
const updateBirthYear = document.querySelector("#update-birth");

const USERNAME_STORAGE_KEY = "currentUsername";
const FILTER_STORAGE_KEY = "activeFilters";
const USER_DATA_STORAGE_KEY = "userData";

// Random backround color when discussion cart is created
//const experiencesBoard = document.querySelectorAll(".experience-card");
const backgroundColor = ["#4B7CF3", "#83EAB1", "#764FF0", "#8F39EC"];
function getRandomColor() {
  return backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
}

let activeCategories = new Set();
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

function isUserAuthenticated() {
  return Boolean(sessionStorage.getItem(USERNAME_STORAGE_KEY));
}
function saveUserData() {
  const username = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  if (username) {
    const userData = {
      email: profileEmailInput.value,
      birthYear: birthYearInput.value,
    };
    sessionStorage.setItem(
      `${USER_DATA_STORAGE_KEY}_${username}`,
      JSON.stringify(userData)
    );
  }
}
function loadUserdata() {
  const username = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  if (username) {
    const userData = JSON.parse(
      sessionStorage.getItem(`${USER_DATA_STORAGE_KEY}_${username}`)
    );
    if (userData) {
      profileEmailInput.value = userData.email || "";
      birthYearInput.value = userData.birthYear || "";
    }
  }
}
updateEmail.addEventListener("click", () => {
  saveUserData();
  updateButtonLabel();
});
updateBirthYear.addEventListener("click", () => {
  saveUserData();
});
function onLogout() {
  logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem(USERNAME_STORAGE_KEY);
    sessionStorage.removeItem(FILTER_STORAGE_KEY);
    onLogin();
    location.hash = "login";
  });
}
function updateButtonLabel() {
  const username = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  if (username) {
    const userData = JSON.parse(
      sessionStorage.getItem(`${USER_DATA_STORAGE_KEY}_${username}`)
    );
    if (userData && userData.email) {
      updateEmail.textContent = "Edit Email";
    } else {
      updateEmail.textContent = "Add Email";
    }
  }
}
function onLogin() {
  const isAuthenticated = isUserAuthenticated();
  if (isAuthenticated) {
    loginLink.style.display = "none";
    profileLink.style.display = "block";
    logoutBtn.style.display = "block";
    profileUsername.value = sessionStorage.getItem(USERNAME_STORAGE_KEY);
    updateEmail.textContent = loadUserdata();
    updateButtonLabel();
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return response.json();
    })
    .then((_) => {
      //console.log(data);
      sessionStorage.setItem(USERNAME_STORAGE_KEY, username);
      onLogin();
      saveActiveCategories();
      location.hash = "content";
      //console.log("success");
    })
    .catch((error) => {
      console.log(`failure - ${error}`);
      alert("invalid credentials.");
    });
});
function handleRoute() {
  let currentHashRoute = location.hash.slice(1);
  // if (currentHashRoute.includes("videodetails")) {
  //   currentHashRoute = "videodetails";
  // }
  switch (currentHashRoute) {
    case "": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";

      break;
    }
    case "home": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      loginPage.style.display = "none";

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
    // case "videoDetails": {
    //   homePage.style.display = "none";
    //   contentPage.style.display = "block";
    //   discussionPage.style.display = "none";
    //   contactPage.style.display = "none";
    //   profilePage.style.display = "none";
    //   loginPage.style.display = "none";
    //   videoDetails.style.display = "block";
    //   // const id = location.hash.split("/")[1];
    //   // const foundVideo = cards.find((card) => card.id === +id);
    //   // console.log(foundVideo);

    //   // const video = renderCard(foundVideo);
    //   // videoDetails.append(video);
    //   break;
    //}

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
function renderCard(card) {
  const container = document.createElement("div");
  container.classList.add("content-card", "mb-3");
  // container.addEventListener("click", () => {
  //   location.hash = `videodetails/${card.id}`;
  // });
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
}
cards.forEach((card) => {
  const showCard = renderCard(card);
  cardList.append(showCard);
});
// Handling login form

window.addEventListener("load", () => {
  handleRoute();
  onLogin();
  renderExperiences();
  renderComments();
});

window.addEventListener("hashchange", () => {
  handleRoute();
});

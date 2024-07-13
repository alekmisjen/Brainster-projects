//pages
const homePage = document.querySelector("#home");
const contentPage = document.querySelector("#content");
const discussionPage = document.querySelector("#discussion");
const contactPage = document.querySelector("#contact");
const profilePage = document.querySelector("#profile");
const loginPage = document.querySelector("#login");

const cardList = document.querySelector("#cards-container");

const videoDetails = document.querySelector("#video-details");

//const loginForm = document.querySelector("#login-form");

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
let currentCardId;
// Random backround color when discussion cart is created
//const experiencesBoard = document.querySelectorAll(".experience-card");
const backgroundColor = ["#4B7CF3", "#83EAB1", "#764FF0", "#8F39EC"];
function getRandomColor() {
  return backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
}
let clickedCards = new Set();
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
    if (savedCategories && savedCategories.length > 0) {
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
    if (activeCategories.has(category)) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      toggleCategory(category, button);
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
  cardList.innerText = "";

  if (activeCategories.size === 0) {
    cards.forEach((card) => {
      const showCard = renderCard(card);
      cardList.appendChild(showCard);
    });
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
    document.querySelector("#experienceForm").style.display = "block";
    commentForm.style.display = "block";
    profileUsername.value = sessionStorage.getItem(USERNAME_STORAGE_KEY);
    updateEmail.textContent = loadUserdata();
    updateButtonLabel();
    onLogout();
  } else {
    loginLink.style.display = "block";
    profileLink.style.display = "none";
    logoutBtn.style.display = "none";
    document.querySelector("#experienceForm").style.display = "none";
    commentForm.style.display = "none";
  }
}
function welcomeModalLogin() {
  const welcomeModal = new bootstrap.Modal(
    document.querySelector("#welcomeModal")
  );
  const loginForm = document.querySelector("#login-form");
  const redirectToProfileBtn = document.querySelector("#redirectToProfile");

  // Redirect to profile page when button in modal is clicked
  redirectToProfileBtn.addEventListener("click", () => {
    welcomeModal.hide();
    location.hash = "profile";
  });

  // Handle form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

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
        sessionStorage.setItem(USERNAME_STORAGE_KEY, username);
        onLogin();
        saveActiveCategories();
        location.hash = "login";
        welcomeModal.show(); // Show the modal upon successful login
      })
      .catch((error) => {
        console.log(`failure - ${error}`);
        alert("invalid credentials.");
      });
  });
}
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
  container.classList.add("content-card", "mb-3", "col-sm-12", "col-lg-3");

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
  container.addEventListener("click", function () {
    openModal(card);
    trackCardClick(card.id);
  });
  return container;
}
function openModal(card) {
  const modalTitle = document.querySelector("#modal-title");
  const modalVideo = document.querySelector("#modal-video");
  const modalDesc = document.querySelector("#modal-desc");

  modalTitle.innerText = card.title;
  modalVideo.src = `https://www.youtube.com/embed/${card.videoId}`;
  modalDesc.innerText = card.description;
  const cardModal = new bootstrap.Modal(document.querySelector("#card-modal"));
  cardModal.show();

  currentCardId = card.id;
  renderComments(card.id);
}
function trackCardClick(cardId) {
  console.log(`Card clicked: ${cardId}`);
  clickedCards.add(cardId);
  console.log(`Unique cards clicked: ${clickedCards.size}`);
  if (clickedCards.size >= 5) {
    showBadge();
  }
}
function showBadge() {
  const badge2 = document.getElementById("badge2");
  if (badge2) {
    badge2.style.display = "block";
    //console.log("Badge displayed!"); // Debug log
  } else {
    badge2.style.display = "none"; // Error log
  }
}
cards.forEach((card) => {
  const showCard = renderCard(card);
  cardList.append(showCard);
});

window.addEventListener("load", () => {
  handleRoute();
  onLogin();
  renderExperiences();
  renderComments();
  welcomeModalLogin();
});

window.addEventListener("hashchange", () => {
  handleRoute();
});

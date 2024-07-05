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

const USERNAME_STORAGE_KEY = "currentUsername";
const FILTER_STORAGE_KEY = "activeFilters";
// Random backround color when discussion cart is created
//const experiencesBoard = document.querySelectorAll(".experience-card");
const backgroundColor = ["#4B7CF3", "#83EAB1", "#764FF0", "#8F39EC"];

// class Experience {
//   constructor(username, content, image) {
//     this.username = username;
//     this.content = content;
//     this.image = image;
//     this.datetime = new Date();
//   }
// }
// function getExperiencesFromSessionStorage() {
//   const experiencesFromSS = JSON.parse(sessionStorage.getItem("experiences"));
//   if (!experiencesFromSS) return [];
//   experiencesFromSS.forEach((experience) => {
//     experience.datetime = new Date(experience.datetime);
//   });
//   return experiencesFromSS;
// }
// const experiences = getExperiencesFromSessionStorage();
// const experienceForm = document.querySelector("#experienceForm");
// experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
// function getRandomColor() {
//   return backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
// }

// const experienceList = document.querySelector("#experienceList");
// function renderExperiences() {
//   experiences.forEach((experience) => {
//     const experienceContainer = document.createElement("div");
//     experienceContainer.classList.add("w-25", "m-2", "discussion-content");
//     experienceContainer.style.backgroundColor = getRandomColor();
//     // Create inner content container
//     const experinceContentContainer = document.createElement("div");
//     experinceContentContainer.classList.add("p-3");

//     //Create and append the content paragraph
//     const contentParagraph = document.createElement("p");
//     contentParagraph.textContent = `${experience.content}`;
//     experinceContentContainer.appendChild(contentParagraph);

//     //   // Create and append the user info container
//     const userInfoContainer = document.createElement("div");
//     userInfoContainer.classList.add("mb-3");
//     const userInfoParagraph = document.createElement("p");
//     userInfoParagraph.classList.add("d-flex", "align-items-center");

//     const userImage = document.createElement("img");
//     userImage.src = `images/user1.png`;

//     const usernameSpan = document.createElement("span");
//     usernameSpan.classList.add("ms-3");
//     usernameSpan.textContent = `${experience.username}`;
//     const dateSpan = document.createElement("span");
//     dateSpan.classList.add("ms-5");
//     dateSpan.textContent = `${experience.datetime
//       .toLocaleString()
//       .replace("AM", "")
//       .replace("PM", "")}`;

//     userInfoParagraph.append(userImage, usernameSpan, dateSpan);
//     userInfoContainer.append(userInfoParagraph);
//     experinceContentContainer.append(userInfoContainer);

//     //   // Create and append the comment input
//     const commentInput = document.createElement("input");
//     commentInput.type = "text";
//     commentInput.placeholder = "write comment";
//     commentInput.classList.add(
//       "mb-3",
//       "custom-input",
//       "w-100",
//       "px-2",
//       "disabled"
//     );
//     experinceContentContainer.append(commentInput);

//     //   // Create and append the reactions container
//     const reactionsContainer = document.createElement("div");
//     reactionsContainer.classList.add("d-flex", "justify-content-start", "mb-3");

//     const addReactionSpan = document.createElement("span");
//     addReactionSpan.classList.add("me-3");
//     addReactionSpan.textContent = "+";

//     const commentsSpan = document.createElement("span");
//     commentsSpan.classList.add("ms-3");
//     commentsSpan.textContent = `10 Коментари`;

//     const reactionsSpan = document.createElement("span");
//     reactionsSpan.classList.add("ms-3");
//     reactionsSpan.textContent = `50 Реакции`;

//     reactionsContainer.appendChild(addReactionSpan);
//     reactionsContainer.appendChild(commentsSpan);
//     reactionsContainer.appendChild(reactionsSpan);

//     experinceContentContainer.appendChild(reactionsContainer);
//     experienceContainer.appendChild(experinceContentContainer);
//     experienceList.appendChild(experienceContainer);
//   });
// }
// function handleAddExperience(event) {
//   event.preventDefault();
//   const username = experienceForm.username.value.trim();
//   const content = experienceForm.experienceContent.value.trim();
//   if (!username || !content) {
//     alert("All fields are required!");
//     return;
//   }
//   const newExperience = new Experience(username, content);
//   experiences.push(newExperience);
//   experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
//   sessionStorage.setItem("experiences", JSON.stringify(experiences));
//   renderExperiences();
//   experienceForm.reset();
// }
// experienceForm.addEventListener("submit", handleAddExperience);

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
  return Boolean(localStorage.getItem(USERNAME_STORAGE_KEY));
}
function onLogout() {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem(USERNAME_STORAGE_KEY);
    sessionStorage.removeItem(FILTER_STORAGE_KEY);
    onLogin();
    location.hash = "login";
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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      return response.json();
    })
    .then((_) => {
      //console.log(data);
      localStorage.setItem(USERNAME_STORAGE_KEY, username);
      onLogin();
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
  // renderExperiences();
});

window.addEventListener("hashchange", () => {
  handleRoute();
});

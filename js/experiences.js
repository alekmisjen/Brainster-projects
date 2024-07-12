class Experience {
  constructor(username, content, image, datetime) {
    this.username = username;
    this.content = content;
    this.image = image || "./images/user1.png";
    this.datetime = datetime ? new Date(datetime) : new Date();
  }
}

function getExperiencesFromSessionStorage() {
  const experiencesFromSS = JSON.parse(sessionStorage.getItem("experiences"));
  if (!experiencesFromSS) return [];
  experiencesFromSS.forEach((experience) => {
    experience.datetime = new Date(experience.datetime);
  });
  return experiencesFromSS;
}

const experienceData = [
  new Experience(
    "John Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati.",
    "./images/user2.png",
    "2024-07-10T12:00:00"
  ),
  new Experience(
    "Alice Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati.",
    "./images/user3.png",
    "2024-07-10T12:00:00"
  ),
  new Experience(
    "Steven Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati.",
    "./images/user4.png",
    "2024-07-10T12:00:00"
  ),
];

const experiencesFromSS = getExperiencesFromSessionStorage();
const experiences = [...experiencesFromSS, ...experienceData];
const experienceForm = document.querySelector("#experienceForm");
experiences.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

const experienceList = document.querySelector("#experienceList");

function renderExperiences() {
  const username = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  experienceList.innerHTML = "";
  experiences.forEach((experience) => {
    const experienceContainer = document.createElement("div");
    experienceContainer.classList.add("col-md-3", "m-2", "discussion-content");
    experienceContainer.style.backgroundColor = getRandomColor();

    // Create inner content container
    const experinceContentContainer = document.createElement("div");
    experinceContentContainer.classList.add("p-3");

    // Create and append the content paragraph
    experinceContentContainer.innerHTML = `
        <p>${experience.content}</p>
        <div class="mb-3">
          <p class="d-flex align-items-center">
            <img src="${experience.image}" alt="User Image">
            <span class="ms-3">${experience.username}</span>
            <span class="ms-5">${experience.datetime
              .toLocaleString()
              .replace("AM", "")
              .replace("PM", "")}</span>
          </p>
        </div>
        <input type="text" placeholder="write comment" class="mb-3 custom-input w-100 px-2 disabled">
        <div class="d-flex justify-content-start mb-3">
          <span class="me-3">+</span>
          <span class="ms-3">10 Коментари</span>
          <span class="ms-3">50 Реакции</span>
        </div>
      `;

    experienceContainer.appendChild(experinceContentContainer);
    experienceList.appendChild(experienceContainer);
  });

  // Check if the user has posted any experiences and show the badge
  checkAndShowBadge(username);
}

function handleAddExperience(event) {
  event.preventDefault();

  const exUsername = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  const exContent = experienceForm.experienceContent.value.trim();
  if (!exContent) {
    alert("All fields are required!");
    return;
  }
  const newExperience = new Experience(exUsername, exContent);
  experiences.push(newExperience);
  experiences.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
  sessionStorage.setItem("experiences", JSON.stringify(experiences));
  renderExperiences();
  experienceForm.reset();
  document.getElementById("currentUsername").textContent = exUsername;
}

function checkAndShowBadge(username) {
  let userHasExperience = false;

  for (let i = 0; i < experiences.length; i++) {
    if (experiences[i].username === username) {
      userHasExperience = true;
      break;
    }
  }

  const badge5 = document.getElementById("badge5");
  if (userHasExperience) {
    badge5.style.display = "block";
  } else {
    badge5.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const username =
    sessionStorage.getItem(USERNAME_STORAGE_KEY) || "Default Username";
  document.getElementById("currentUsername").textContent = username;
  renderExperiences();
});

experienceForm.addEventListener("submit", handleAddExperience);

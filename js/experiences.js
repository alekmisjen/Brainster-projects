class Experience {
  constructor(username, content, image) {
    this.username = username;
    this.content = content;
    this.image = image;
    this.datetime = new Date();
  }
}
function getExperiencesFromSessionStorage() {
  const experiencesFromSS = JSON.parse(sessionStorage.getItem("experiences"));
  if (!experiencesFromSS) return [];
  experiencesFromSS.forEach((experience) => {
    experience.datetime = new Date(experience.datetime);
  });
  return experiencesFromSS;
  //return experiencesFromSS ? experiencesFromSS : [];
}

const experienceData = [
  new Experience(
    "John Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati."
  ),
  new Experience(
    "Alice Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati."
  ),
  new Experience(
    "Steven Doe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati."
  ),
];

const experiencesFromSS = getExperiencesFromSessionStorage();
const experiences = [...experiencesFromSS, ...experienceData];
const experienceForm = document.querySelector("#experienceForm");
experiences.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

const experienceList = document.querySelector("#experienceList");
function renderExperiences() {
  //const username = sessionStorage.getItem(USERNAME_STORAGE_KEY);
  experienceList.innerHTML = "";
  experiences.forEach((experience) => {
    const experienceContainer = document.createElement("div");
    experienceContainer.classList.add("w-100", "m-2", "discussion-content");
    experienceContainer.style.backgroundColor = getRandomColor();

    // Create inner content container
    const experinceContentContainer = document.createElement("div");
    experinceContentContainer.classList.add("p-3");

    // Create and append the content paragraph
    experinceContentContainer.innerHTML = `
        <p>${experience.content}</p>
        <div class="mb-3">
          <p class="d-flex align-items-center">
            <img src="images/user1.png" alt="User Image">
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
  //experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  sessionStorage.setItem("experiences", JSON.stringify(experiences));
  renderExperiences();
  experienceForm.reset();
  document.getElementById("currentUsername").textContent = exUsername;
}
document.addEventListener("DOMContentLoaded", () => {
  const username =
    sessionStorage.getItem(USERNAME_STORAGE_KEY) || "Default Username";
  document.getElementById("currentUsername").textContent = username;
  renderExperiences();
});
experienceForm.addEventListener("submit", handleAddExperience);

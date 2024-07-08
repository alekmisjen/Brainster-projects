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
const experiences = getExperiencesFromSessionStorage();
const experienceForm = document.querySelector("#experienceForm");
experiences.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

const experienceList = document.querySelector("#experienceList");
function renderExperiences() {
  experienceList.innerHTML = "";
  experiences.forEach((experience) => {
    const experienceContainer = document.createElement("div");
    experienceContainer.classList.add("w-100", "m-2", "discussion-content");
    experienceContainer.style.backgroundColor = getRandomColor();
    // Create inner content container
    const experinceContentContainer = document.createElement("div");
    experinceContentContainer.classList.add("p-3");

    //Create and append the content paragraph
    const contentParagraph = document.createElement("p");
    contentParagraph.textContent = `${experience.content}`;
    experinceContentContainer.appendChild(contentParagraph);

    //   // Create and append the user info container
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("mb-3");
    const userInfoParagraph = document.createElement("p");
    userInfoParagraph.classList.add("d-flex", "align-items-center");

    const userImage = document.createElement("img");
    userImage.src = `images/user1.png`;

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("ms-3");
    usernameSpan.textContent = `${experience.username}`;
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("ms-5");
    dateSpan.textContent = `${experience.datetime
      .toLocaleString()
      .replace("AM", "")
      .replace("PM", "")}`;

    userInfoParagraph.append(userImage, usernameSpan, dateSpan);
    userInfoContainer.append(userInfoParagraph);
    experinceContentContainer.append(userInfoContainer);

    //   // Create and append the comment input
    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "write comment";
    commentInput.classList.add(
      "mb-3",
      "custom-input",
      "w-100",
      "px-2",
      "disabled"
    );
    experinceContentContainer.append(commentInput);

    //   // Create and append the reactions container
    const reactionsContainer = document.createElement("div");
    reactionsContainer.classList.add("d-flex", "justify-content-start", "mb-3");

    const addReactionSpan = document.createElement("span");
    addReactionSpan.classList.add("me-3");
    addReactionSpan.textContent = "+";

    const commentsSpan = document.createElement("span");
    commentsSpan.classList.add("ms-3");
    commentsSpan.textContent = `10 Коментари`;

    const reactionsSpan = document.createElement("span");
    reactionsSpan.classList.add("ms-3");
    reactionsSpan.textContent = `50 Реакции`;

    reactionsContainer.appendChild(addReactionSpan);
    reactionsContainer.appendChild(commentsSpan);
    reactionsContainer.appendChild(reactionsSpan);

    experinceContentContainer.appendChild(reactionsContainer);
    experienceContainer.appendChild(experinceContentContainer);
    experienceList.appendChild(experienceContainer);
  });
}
function handleAddExperience(event) {
  event.preventDefault();

  const exUsername = experienceForm.experiensUsername.value.trim();
  const exContent = experienceForm.experienceContent.value.trim();
  if (!exUsername || !exContent) {
    alert("All fields are required!");
    return;
  }
  const newExperience = new Experience(exUsername, exContent);
  experiences.push(newExperience);
  //experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  sessionStorage.setItem("experiences", JSON.stringify(experiences));
  renderExperiences();
  experienceForm.reset();
}
experienceForm.addEventListener("submit", handleAddExperience);

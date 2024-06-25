//pages
const homePage = document.querySelector("#home");
const contentPage = document.querySelector("#content");
const discussionPage = document.querySelector("#discussion");
const contactPage = document.querySelector("#contact");
const profilePage = document.querySelector("#profile");

function handleRoute() {
  const currentHashRoute = location.hash.slice(1);
  switch (currentHashRoute) {
    case "": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";

      break;
    }
    case "home": {
      homePage.style.display = "block";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      break;
    }
    case "content": {
      homePage.style.display = "none";
      contentPage.style.display = "block";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      break;
    }

    case "discussion": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "block";
      contactPage.style.display = "none";
      profilePage.style.display = "none";
      break;
    }
    case "contact": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "block";
      profilePage.style.display = "none";
      break;
    }
    case "profile": {
      homePage.style.display = "none";
      contentPage.style.display = "none";
      discussionPage.style.display = "none";
      contactPage.style.display = "none";
      profilePage.style.display = "block";
      break;
    }
    default:
      location.hash = "";
  }
}
window.addEventListener("load", () => {
  handleRoute();
});

window.addEventListener("hashchange", () => {
  handleRoute();
});

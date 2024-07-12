class Comments {
  constructor(content, username, cardId) {
    this.content = content;
    //this.image = image;
    this.username = username;
    this.datetime = new Date();
    this.cardId = cardId;
  }
}
function getCommentsFromSessionStorage() {
  const commentsFromSS = JSON.parse(sessionStorage.getItem("comments"));
  if (!commentsFromSS) return [];
  commentsFromSS.forEach((comment) => {
    comment.datetime = new Date(comment.datetime);
  });
  return commentsFromSS;
  //return experiencesFromSS ? experiencesFromSS : [];
}
const comments = getCommentsFromSessionStorage();
const commentForm = document.querySelector("#commentsForm");

const commentsList = document.querySelector("#commentsList");

function renderComments(cardId) {
  commentsList.innerHTML = "";
  const filteredComments = comments.filter(
    (comment) => comment.cardId === cardId
  );
  filteredComments.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("w-100", "m-2");
    const innerContent = document.createElement("div");
    innerContent.classList.add("card", "mb-3", "p-3");
    //Create and append the content paragraph
    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = `${comment.content}`;

    //   // Create and append the user info container
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add(
      "mb-3",
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );
    const group = document.createElement("div");

    const userImage = document.createElement("img");
    userImage.src = `images/user1.png`;

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("ms-3");
    usernameSpan.textContent = `${comment.username}`;
    group.append(userImage, usernameSpan);
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("ms-5");
    dateSpan.textContent = `${comment.datetime
      .toLocaleString()
      .replace("AM", "")
      .replace("PM", "")}`;

    userInfoContainer.append(group, dateSpan);

    innerContent.append(commentParagraph, userInfoContainer);
    commentContainer.append(innerContent);
    commentsList.appendChild(commentContainer);
  });
}
function handleAddComments(event, cardId) {
  event.preventDefault();

  const username = commentForm.commentUsername.value.trim();
  const content = commentForm.commentContent.value.trim();
  if (!username || !content) {
    alert("All fields are required!");
    return;
  }
  const newComment = new Comments(content, username, cardId);
  comments.push(newComment);
  //experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  sessionStorage.setItem("comments", JSON.stringify(comments));
  renderComments(cardId);
  commentForm.reset();
}
commentForm.addEventListener("submit", (event) =>
  handleAddComments(event, currentCardId)
);
//commentForm.addEventListener("submit", handleAddComments);

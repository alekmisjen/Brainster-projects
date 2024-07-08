class Comments {
  constructor(content, username) {
    this.content = content;
    //this.image = image;
    this.username = username;
    this.datetime = new Date();
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

function renderComments() {
  commentsList.innerHTML = "";
  comments.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("w-100", "m-2");

    //Create and append the content paragraph
    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = `${comment.content}`;

    //   // Create and append the user info container
    const userInfoContainer = document.createElement("div");
    userInfoContainer.classList.add("mb-3", "d-flex", "align-items-center");

    const userImage = document.createElement("img");
    userImage.src = `images/user1.png`;

    const usernameSpan = document.createElement("span");
    usernameSpan.classList.add("ms-3");
    usernameSpan.textContent = `${comment.username}`;
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("ms-5");
    dateSpan.textContent = `${comment.datetime}`;

    userInfoContainer.append(userImage, usernameSpan, dateSpan);

    commentContainer.append(commentParagraph, userInfoContainer);

    commentsList.appendChild(commentContainer);
  });
}
function handleAddComments(event) {
  event.preventDefault();

  const username = commentForm.commentUsername.value.trim();
  const content = commentForm.commentContent.value.trim();
  if (!username || !content) {
    alert("All fields are required!");
    return;
  }
  const newComment = new Comments(content, username);
  comments.push(newComment);
  //experiences.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  sessionStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
  commentForm.reset();
}
commentForm.addEventListener("submit", handleAddComments);

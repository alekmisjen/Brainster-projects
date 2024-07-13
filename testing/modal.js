// Sample data (replace with your actual data)

// Function to render cards dynamically
function renderCards() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = ""; // Clear previous content

  cards.forEach((card) => {
    const cardElement = renderCard(card);
    cardsContainer.appendChild(cardElement);
  });
}

// Function to create a single card element
function renderCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("col-md-4", "mb-3");

  // Set up click event to open modal with card data
  cardElement.addEventListener("click", () => {
    openModal(card);
  });

  cardElement.innerHTML = `
    <div class="card h-100">
      <img src="${card.image}" class="card-img-top" alt="Card Image">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.description}</p>
      </div>
    </div>
  `;

  return cardElement;
}

// Function to open modal with card data
function openModal(card) {
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.textContent = card.title;

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <img src="${card.image}" class="img-fluid mb-3" alt="Card Image">
    <p>${card.description}</p>
  `;

  // Show the modal using Bootstrap's modal method
  const modal = new bootstrap.Modal(document.getElementById("myModal"));
  modal.show();
}

// Event listener for modal close event
document
  .getElementById("myModal")
  .addEventListener("hidden.bs.modal", function () {
    // Optional: Perform actions after modal is closed
  });

// Render cards initially
renderCards();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('plant-form');
    const cardsContainer = document.getElementById('card_grid');
    const addPlantCard = document.getElementById('add_card');
    const modalOverlay = document.getElementById('form-modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');

// Function to open the modal
addPlantCard.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close modal when clicking outside the content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

// Get values from the form inputs
const plantName = document.getElementById('plant-name').value;
const plantSpecies = document.getElementById('plant-species').value;
const imageUrl = document.getElementById('image-url').value;

// Create a new plant card element
const newCard = document.createElement('div');
newCard.className = 'plant_card';

// Use a placeholder image if the user doesn't provide a URL
const finalImageUrl = imageUrl || 'https://placehold.co/500x250/A2CC4B/ffffff?text=New+Plant';

// Construct the inner HTML for the new card using template literals
newCard.innerHTML = `
    <img class="plant_img" src="${finalImageUrl}" alt="${plantName}">
    <h3>${plantName}</h3>
    <p>${plantSpecies} <br> Last Watered: ${new Date().toLocaleDateString()}</p>
`;

// Append the new card to the container, placing it before the "Add New Plant" card
cardsContainer.insertBefore(newCard, addPlantCard.nextSibling);

// Reset the form and close the modal
form.reset();
modalOverlay.style.display = 'none';
});
});
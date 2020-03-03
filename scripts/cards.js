// Function to save the cards to local storage
const saveState = function saveToLocalStorage(item, element) {
    localStorage.setItem(item, element.innerHTML);
};

// Function to restore the cards from local storage
const restoreState = function restoreToLastSavedState(item, element) {
    element.innerHTML = localStorage.getItem(item);
};

// Get cards elements
let cardsContainer = document.getElementsByClassName("cards-container")[0];
let cards = document.getElementsByClassName("card");

// Get values for the cards
let nameInput = document.getElementById("name");
let professionInput = document.getElementById("profession");
let emailInput = document.getElementById("email");

// Get the form so we can do reset
let cardForm = document.getElementById("card-form");

if (localStorage.getItem("cards") === null) {
    localStorage.setItem("cards", "");
};

restoreState("cards", cardsContainer);

// Add a card
const addCard = function addCardToPage() {
    // Handling for both "פקיד" and "clerk" strings
    const hebrewClerk = /\u05e4\u05e7\u05d9\u05d3/g ;
    const englishClerk = /Clerk/i ;

    // Get name and check if longer then 2 charecters
    let name = nameInput.value;
    if (name.length <= 2) {
        return alert("Name is too short!");
    };

    // Get profession and remove clerk profession
    let profession = professionInput.value;
    profession = profession.replace(hebrewClerk, "");
    profession = profession.replace(englishClerk, "");

    // Get email and validate it
    let email = emailInput.value;
    if (!validateEmail(email)) {
        email = "valid@email.com";
    };

    // Reset the card creation form
    cardForm.reset();

    // Create html to insert and inject it into the cards container
    let htmlInsertion = `
    <div class="card tada"><ul class="card-list">
    <li>Name: ${name}</li>
    <li>Profession: ${profession}</li>
    <li>E-mail: ${email}</li>
    <input class="delete-button" type="button" value="Delete" onclick="removeCard(this)">
    </ul></div>
    `;

    cardsContainer.insertAdjacentHTML('beforeend', htmlInsertion);
    saveState("cards", cardsContainer); // Save current state
};

// Remove a card
const removeCard = function removeCardFromPage(currentCard) {
    currentCard.parentElement.parentElement.remove();
    saveState("cards", cardsContainer); // Save current state
};

const validateEmail = function isEmailVaild(email) {
    // This is a very simple validator
    // In a real website, might be best to ask to enter the email twice
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};
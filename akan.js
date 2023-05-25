// Get references to the form and the name element
const form = document.querySelector('form');
const nameEl = document.querySelector('.name h2');

// Define the Akan names
const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];


// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();


     // Get the user input values
    const bdate = new Date(event.target.bdate.value);
    const gender = event.target.gender.value;

    // Calculate the day of the week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = bdate.getUTCDay();


    // Determine the Akan name based on the gender and day of the week
    let akanName;
    if (gender === 'none') {
    akanName = 'Please select a gender';
    } else if (gender === 'male') {
    akanName = maleNames[dayOfWeek];
    } else {
    akanName = femaleNames[dayOfWeek];
    }

    // Display the Akan name on the page
  nameEl.textContent = `Your Akan Name Is: ${akanName}`;
});

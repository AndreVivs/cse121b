/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Andrea Ramos';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/placeholder.png';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

const favoriteFoods = ['Sushi', 'Pizza', 'Thai Food'];

// Display favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;


//Hold another single favorite food item
const newFavoriteFood = 'Orange Chicken';
favoriteFoods.push(newFavoriteFood);

//Append the new array values onto the displayed content of the HTML
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

// Remove the first element in the favorite food array
favoriteFoods.shift(0);
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;

//Remove the last element in the favorite food array
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;



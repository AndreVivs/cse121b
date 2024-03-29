/* LESSON 3 - Programming Tasks */


/* Profile Object */

let myProfile = {  

    name: "Andrea Ramos",
    photo: "./images/placeholder.png",
    favoriteFoods: ["Pizza", "Sushi", "Pasta"],
    hobbies: ["Dancing", "Hiking", "Traveling", "Camping"],
    placesLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ place: "México", length: "18 years" });
myProfile.placesLived.push({ place: "Cancun", length: "1 year" });
myProfile.placesLived.push({ place: "Issaquah, WA", length: "1 year" });
myProfile.placesLived.push({ place: "Switzerland", length: "1 year" });

  
/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List */
const favoriteFoodsList = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach (food => {

    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);

});

/* Hobbies List */

const hobbiesList = document.getElementById("hobbies");

myProfile.hobbies.forEach(hobby => {

    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);

});

/* Places Lived DataList */

const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach(place => {

    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);

});


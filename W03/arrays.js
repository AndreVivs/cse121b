// Activity 1 - Map

array = ['one', 'two', 'three']
const arrayHTML = array.map(function (word) {
    return `<li>${word}</li>`
});

document.getElementById("myList").innerHTML = arrayHTML.join();

// Activity 2 - Map

const grades = ["A", "B", "A"]
const convertionToPoints = (grade) => {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertionToPoints);

document.getElementById("myGrades").innerHTML = gpaPoints.join();

// Activity 3 - Reduce

const gpaReducer = gpaPoints.reduce((total, item) => total + item);
const gpsAverange = gpaReducer / gpaPoints.length;

document.getElementById("myAverange").innerHTML = gpsAverange.toFixed(2);

// Activity 4 - Filter

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longerThan6 = fruits.filter((e) => e.length < 6);

document.getElementById("myFruit").innerHTML = longerThan6.join()

// Activity 5 - indexOf

const numbers = [12, 34, 21, 54];
let indexLuckNumber = numbers.indexOf(21)

document.getElementById("myLuckNumberIndex").innerHTML = indexLuckNumber;


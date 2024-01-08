// script-kindergarten.js

// You can add some JavaScript code to make the page more dynamic and interactive
// For example, you can use the fetch API to get some data from an external source and display it on the page
// Or you can use some animations or transitions to make the page more lively
// Or you can add some event listeners to handle user interactions
// Here is a simple example of how to use the fetch API to get some jokes or riddles about the lesson topics and display them on the page

// Select the elements from the HTML document
const lesson1 = document.querySelector(".lesson:nth-child(1)");
const lesson2 = document.querySelector(".lesson:nth-child(2)");
const lesson3 = document.querySelector(".lesson:nth-child(3)");
const lesson4 = document.querySelector(".lesson:nth-child(4)");

// Define a function to get a random joke or riddle from an API
function getJokeOrRiddle(topic, element) {
  // Use the fetch API to make a request to the API endpoint
  fetch(`https://v2.jokeapi.dev/joke/${topic}?type=single`)
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Create a new paragraph element to display the joke or riddle
      const p = document.createElement("p");
      p.textContent = data.joke;
      p.style.fontStyle = "italic";
      p.style.color = "#999";
      // Append the paragraph element to the lesson element
      element.appendChild(p);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

// Call the function for each lesson with a different topic
getJokeOrRiddle("Any?blacklistFlags=nsfw,religious,political,racist,sexist", lesson1);
getJokeOrRiddle("Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist", lesson2);
getJokeOrRiddle("Programming?blacklistFlags=nsfw,religious,political,racist,sexist", lesson3);
getJokeOrRiddle("Pun?blacklistFlags=nsfw,religious,political,racist,sexist", lesson4);

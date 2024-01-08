// numbers.js

// get the flash cards container
const flashCards = document.querySelector(".flash-cards");

// get the quiz container
const quiz = document.querySelector(".quiz");

// get the quiz question
const quizQuestion = document.querySelector(".quiz h3");

// get the quiz card
const quizCard = document.querySelector(".quiz .quiz-card");

// get the quiz image
const quizImage = document.querySelector(".quiz .quiz-card img");

// get the quiz options container
const quizOptions = document.querySelector(".quiz .quiz-options");

// get the quiz option buttons
const quizButtons = document.querySelectorAll(".quiz .quiz-options button");

// get the quiz feedback container
const quizFeedback = document.querySelector(".quiz .quiz-feedback");

// get the quiz feedback message
const quizMessage = document.querySelector(".quiz .quiz-feedback p");

// get the next button container
const next = document.querySelector(".next");

// get the next button
const nextButton = document.querySelector(".next button");

// create an array of quiz images
const quizImages = [
  "6.jpg", // 6 upside down
  "9.jpg", // 9 upside down
  "8.jpg", // 8 sideways
  "5.jpg", // 5 sideways
  "10.jpg", // 10 with a zero missing
];

// create an array of quiz answers
const quizAnswers = [6, 9, 8, 5, 10];

// create a variable to store the current quiz index
let quizIndex = 0;

// create a function to play a sound
function playSound(sound) {
  // create a new audio element
  const audio = new Audio(sound);
  // play the audio
  audio.play();
}

// add a click event listener to the flash cards container
flashCards.addEventListener("click", function (e) {
  // get the clicked element
  const element = e.target;
  // check if the element is a card
  if (element.classList.contains("card")) {
    // get the card number
    const number = element.dataset.number;
    // get the card color
    const color = element.dataset.color;
    // get the card sound
    const sound = element.dataset.sound;
    // play the card sound
    playSound(sound);
    // show the quiz container
    quiz.style.display = "block";
    // hide the next button container
    next.style.display = "none";
    // set the quiz question
    quizQuestion.textContent = `Which number is this?`;
    // set the quiz image
    quizImage.src = quizImages[quizIndex];
    quizImage.alt = `A flash card with the number ${quizAnswers[quizIndex]} in a different orientation`;
  }
});

// add a click event listener to the quiz options container
quizOptions.addEventListener("click", function (e) {
  // get the clicked element
  const element = e.target;
  // check if the element is a button
  if (element.tagName === "BUTTON") {
    // get the option value
    const option = element.dataset.option;
    // get the answer value
    const answer = quizAnswers[quizIndex];
    // check if the option matches the answer
    if (option == answer) {
      // play the correct sound
      playSound("correct.mp3");
      // set the feedback message
      quizMessage.textContent = "Correct! Well done!";
      // set the feedback message color
      quizMessage.style.color = "green";
    } else {
      // play the wrong sound
      playSound("wrong.mp3");
      // set the feedback message
      quizMessage.textContent = `Wrong! The correct answer is ${answer}.`;
      // set the feedback message color
      quizMessage.style.color = "red";
    }
    // show the feedback container
    quizFeedback.style.display = "block";
    // show the next button container
    next.style.display = "block";
    // disable the quiz buttons
    quizButtons.forEach(function (button) {
      button.disabled = true;
    });
  }
});

// add a click event listener to the next button
nextButton.addEventListener("click", function () {
  // increment the quiz index
  quizIndex++;
  // check if the quiz index is within the quiz length
  if (quizIndex < quizImages.length) {
    // hide the feedback container
    quizFeedback.style.display = "none";
    // hide the next button container
    next.style.display = "none";
    // enable the quiz buttons
    quizButtons.forEach(function (button) {
      button.disabled = false;
    });
    // set the quiz image
    quizImage.src = quizImages[quizIndex];
    quizImage.alt = `A flash card with the number ${quizAnswers[quizIndex]} in a different orientation`;
  } else {
    // play the finish sound
    playSound("complete.mp3");
    // set the quiz question
    quizQuestion.textContent = "You have completed the quiz!";
    // hide the quiz card
    quizCard.style.display = "none";
    // hide the quiz options
    quizOptions.style.display = "none";
    // hide the feedback container
    quizFeedback.style.display = "none";
    // hide the next button container
    next.style.display = "none";
  }
});

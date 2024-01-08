// song.js

// Get the elements from the document
const lyrics = document.querySelector(".lyrics");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const audio = document.getElementById("audio");

// Create an array of the lyrics
let lyricArray = [
  "One, two, three, four, five",
  "Numbers are so much fun",
  "They help us do many things",
  "Like measure, compare, and run",
  "Numbers, numbers, everywhere",
  "We use them every day",
  "Numbers, numbers, can you sing",
  "Along with me and play",
  "Six, seven, eight, nine, ten",
  "Numbers can be added",
  "When we put them together",
  "We get a bigger number",
  "Numbers, numbers, everywhere",
  "We use them every day",
  "Numbers, numbers, can you sing",
  "Along with me and play",
  "Eleven, twelve, thirteen, fourteen, fifteen",
  "Numbers can be subtracted",
  "When we take some away",
  "We get a smaller number",
  "Numbers, numbers, everywhere",
  "We use them every day",
  "Numbers, numbers, can you sing",
  "Along with me and play",
  "Sixteen, seventeen, eighteen, nineteen, twenty",
  "Numbers can be multiplied",
  "When we repeat them many times",
  "We get a larger number",
  "Numbers, numbers, everywhere",
  "We use them every day",
  "Numbers, numbers, can you sing",
  "Along with me and play",
  "Twenty-one, twenty-two, twenty-three, twenty-four, twenty-five",
  "Numbers can be divided",
  "When we split them into parts",
  "We get a smaller number",
  "Numbers, numbers, everywhere",
  "We use them every day",
  "Numbers, numbers, can you sing",
  "Along with me and play",
];

// Create a variable to store the current index of the lyric
let index = 0;

// Create a function to display the current lyric
function displayLyric() {
  lyrics.textContent = lyricArray[index];
}

// Create a function to play the song
function playSong() {
  // Display the first lyric
  displayLyric();
  // Play the audio
  audio.play();
  // Increment the index every 2 seconds
  let interval = setInterval(function () {
    index++;
    // If the index reaches the end of the array, stop the song
    if (index == lyricArray.length) {
      stopSong();
      clearInterval(interval);
    } else {
      // Otherwise, display the next lyric
      displayLyric();
    }
  }, 2000);
}

// Create a function to stop the song
function stopSong() {
  // Reset the index
  index = 0;
  // Pause the audio
  audio.pause();
  // Display a message
  lyrics.textContent = "The song is over. Thank you for listening!";
}

// Add click events to the play and stop buttons
play.addEventListener("click", playSong);
stop.addEventListener("click", stopSong);

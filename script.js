 // Get the navigation menu
 var nav = document.querySelector(".nav");

 // Create a hamburger button
 var hamburger = document.createElement("div");
 hamburger.classList.add("// Add the hamburger class to the button")
hamburger.classList.add("hamburger");

// Create three lines for the button
var line1 = document.createElement("div");
var line2 = document.createElement("div");
var line3 = document.createElement("div");

// Add the line class to each line
line1.classList.add("line");
line2.classList.add("line");
line3.classList.add("line");

// Append the lines to the button
hamburger.appendChild(line1);
hamburger.appendChild(line2);
hamburger.appendChild(line3);

// Append the button to the navigation menu
nav.appendChild(hamburger);

// Add some style to the button and the lines
var style = document.createElement("style");
style.innerHTML = `
.hamburger {
 display: none;
 width: 40px;
 height: 40px;
 cursor: pointer;
}

.line {
 width: 100%;
 height: 4px;
 background-color: #333;
 margin: 6px 0;
}

@media (max-width: 768px) {
 .hamburger {
   display: block;
 }
}
`;
document.head.appendChild(style);

// Add some functionality to the button
hamburger.addEventListener("click", function() {
// Toggle the display of the menu items
var ul = nav.querySelector("ul");
ul.style.display = ul.style.display === "none" ? "flex" : "none";
});
// 1. Change the id from "navBar" to "socialNetworkNavigation"
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Create a new <li> element
const newLi = document.createElement("li");

// 3. Create a text node with "Logout"
const logoutText = document.createTextNode("Logout");

// 4. Append the text to the new <li>
newLi.appendChild(logoutText);

// 5. Append the new <li> to the <ul>
const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

// 6. Use firstElementChild and lastElementChild to display first and last link text
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link:", firstLi.textContent);  // Should log: "Profile"
console.log("Last link:", lastLi.textContent);    // Should log: "Logout"

// Retrieve the div and log it
const container = document.getElementById("container");
console.log(container);

// Change “Pete” to “Richard”
const firstUl = document.querySelectorAll(".list")[0];
firstUl.children[1].textContent = "Richard";

// Delete second <li> of second <ul>
const secondUl = document.querySelectorAll(".list")[1];
secondUl.removeChild(secondUl.children[1]); // removes "Sarah"

// Change the first <li> of each <ul> to your name
const uls = document.querySelectorAll(".list");
uls.forEach(ul => {
  ul.children[0].textContent = "Ayoub"; // replace "YourName" with your actual name
});

// Add class 'student_list' to both <ul>'s
uls.forEach(ul => {
  ul.classList.add("student_list");
});

// Add classes 'university' and 'attendance' to the first <ul>
firstUl.classList.add("university", "attendance");

// Add light blue background and padding to the <div>
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// Hide the <li> that contains “Dan”
for (let li of secondUl.children) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

// Add border to <li> containing “Richard
for (let li of firstUl.children) {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
}


document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
  const names = [];
  for (let li of firstUl.children) {
    names.push(li.textContent);
  }
  alert(`Hello ${names.join(" and ")}`);
}

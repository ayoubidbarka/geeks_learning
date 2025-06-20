const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

const ulelement = document.querySelector('ul');
const newli = document.createElement('li');
const textnode = document.createTextNode("Logout");
newli.appendChild(textnode);
ulelement.appendChild(newli);

const firstli = ulelement.firstElementChild;
const lastli = ulelement.lastElementChild;

console.log(firstli.textContent); 
console.log(lastli.textContent);  

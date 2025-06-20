let containerDiv = document.getElementById('container');
console.log(containerDiv);
const allLists = document.querySelectorAll('ul.list');  
const secondList = allLists[1];  
const secondListItems = secondList.querySelectorAll('li');

if (secondListItems.length > 1) {
  secondList.removeChild(secondListItems[1]);
}
const myName = "Ayoub.ID"; 
allLists.forEach(list => {
  const firstItem = list.querySelector('li');
  if (firstItem) {
    firstItem.textContent = myName;
  }
});

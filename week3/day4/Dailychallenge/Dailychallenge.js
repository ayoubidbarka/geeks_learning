const libButton = document.getElementById('lib-button');
const storySpan = document.getElementById('story');
const form = document.getElementById('libform');

const storyTemplates = [
  (w) => `Once upon a time, ${w.person} went to ${w.place} with a ${w.adjective} ${w.noun} to ${w.verb}.`,
  (w) => `${w.person} was walking through ${w.place} when they saw a ${w.adjective} ${w.noun} that wanted to ${w.verb}.`,
  (w) => `In ${w.place}, a ${w.noun} that was very ${w.adjective} helped ${w.person} to ${w.verb} something amazing.`
];

let currentWords = {};

libButton.addEventListener('click', function (e) {
  e.preventDefault();

  const noun = document.getElementById('noun').value.trim();
  const adjective = document.getElementById('adjective').value.trim();
  const person = document.getElementById('person').value.trim();
  const verb = document.getElementById('verb').value.trim();
  const place = document.getElementById('place').value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all the fields!");
    return;
  }

  currentWords = { noun, adjective, person, verb, place };
  generateRandomStory();
});

function generateRandomStory() {
  const index = Math.floor(Math.random() * storyTemplates.length);
  const story = storyTemplates[index](currentWords);
  storySpan.textContent = story;
}
const shuffleBtn = document.getElementById('shuffle-btn');

shuffleBtn.addEventListener('click', function () {
  if (Object.keys(currentWords).length === 0) {
    alert("Khassek tsift l kalimat louwlan!");
    return;
  }
  generateRandomStory(); 
});
const planets = [
  { name: "Mercury", colorClass: "mercury" },
  { name: "Venus", colorClass: "venus" },
  { name: "Earth", colorClass: "earth" },
  { name: "Mars", colorClass: "mars" }
];

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
  const div = document.createElement('div');
  div.classList.add('planet', planet.colorClass);
  div.textContent = planet.name;
  div.style.color = 'white';

  if (planet.name === 'Earth') {
    const moon = document.createElement('div');
    moon.classList.add('moon');
    moon.style.top = '5px';
    moon.style.right = '-150px';
    div.appendChild(moon);
  }

  section.appendChild(div);
});

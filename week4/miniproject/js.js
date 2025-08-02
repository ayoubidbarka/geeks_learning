const robots = [
  { id: 1, name: "🤖Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "🤖Ervin Howell", email: "Shanna@melissa.tv" },
  { id: 3, name: "🤖Ayoub Idbarka", email: "ayoub3idbarka@gmail.com" },
  { id: 4, name: "🤖Nicholas Runolfsdottir", email: "Nicholas@robot.com" },
  { id: 5, name: "🤖Chelsey Dietrich", email: "Lucio@robot.com" }
];

const container = document.getElementById('card-container');
const searchInput = document.getElementById('search');

// Function to display cards
function displayCards(data) {
  container.innerHTML = '';
  data.forEach(robot => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="https://robohash.org/${robot.id}?size=100x100" alt="${robot.name}">
      <h3>${robot.name}</h3>
      <p>${robot.email}</p>
    `;
    container.appendChild(card);
  });
}

// Initial display
displayCards(robots);

// Search filter
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(keyword)
  );
  displayCards(filtered);
});

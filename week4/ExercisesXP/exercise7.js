(function(username) {
  const navbar = document.getElementById('navbar');

  const profileDiv = document.createElement('div');
  profileDiv.className = 'profile';

  const img = document.createElement('img');
  img.src = 'https://i.pinimg.com/736x/97/6a/d0/976ad03ea8976cec11cea79c3486c6ad.jpg'; 

  const name = document.createElement('span');
  name.textContent = `Welcome, ${username}`;

  profileDiv.appendChild(img);
  profileDiv.appendChild(name);
  navbar.appendChild(profileDiv);
('Ayoub');
})

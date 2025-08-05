const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then(data => {
    const gifs = data.data; 
    const container = document.getElementById("gif-container");

    gifs.forEach(gif => {
      const img = document.createElement("img");
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;
      container.appendChild(img);
    });
  })
  .catch(error => {
    console.error("Error fetching GIFs:", error);
  });

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query = "sun";
const limit = 10;
const offset = 2;

const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&rating=g&api_key=${apiKey}`;

fetch(url)
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch data from Giphy API");
    }
    return res.json();
  })
  .then(data => {
    console.log(data);

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
    console.error(" Error:", error);
  });

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(query)}&api_key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const gifUrl = data.data.images.fixed_height.url;
    const title = data.data.title || "Random GIF";

    const gifDiv = document.createElement("div");
    gifDiv.style.marginBottom = "15px";

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = title;
    img.style.marginRight = "10px";
    img.style.verticalAlign = "middle";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.style.verticalAlign = "middle";
    deleteBtn.addEventListener("click", () => {
      gifContainer.removeChild(gifDiv);
    });

    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    gifContainer.appendChild(gifDiv);
    input.value = "";

  } catch (error) {
    alert("Error fetching GIF: " + error.message);
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});

const apiUrl = "https://api.tvmaze.com/shows";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response problem");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
    const moviesContainer = document.querySelector(".cards");

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = movie.image.medium;
      image.alt = movie.name;

      const content = document.createElement("div");
      content.classList.add("content");

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = movie.name;

      const imdb = document.createElement("div");
      imdb.classList.add("imdb");
      imdb.textContent = `IMDb: ${movie.rating.average}`;

      content.appendChild(title);
      content.appendChild(imdb);

      card.appendChild(image);
      card.appendChild(content);

      moviesContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Problem :", error);
  });

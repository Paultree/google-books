export const bookGrid = document.getElementById('bookGrid');

export const renderBookInfo = (arrItem) => {
  const container = document.createElement("div");
  container.classList.add('book-container');

  const img = document.createElement("img");
  img.src = arrItem["image"]["thumbnail"] || arrItem["image"];

  const title = document.createElement("h2");
  title.innerText = arrItem["title"];

  const authors = document.createElement("h4");
  authors.innerText = arrItem['authors'];

  const desc = document.createElement("p");
  desc.innerText = arrItem["description"];

  container.append(img, title, authors, desc);
  bookGrid.appendChild(container);
};


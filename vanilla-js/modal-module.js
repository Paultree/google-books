export const modal = document.getElementById('modal');

export const modalBox = document.getElementById('modalBox');

export const openModal = (arr) => {
    
    modalBox.style.display ='block';
    modal.innerHTML = '';
    
    const img = document.createElement("img");
    img.src = arr["image"]["thumbnail"] || arr["image"];

    const title = document.createElement("h2");
    title.innerText = `Title: ${arr["title"]}`;

    const authors = document.createElement("h4");
    authors.innerText = `Author: ${arr["authors"]}`;

    const desc = document.createElement("p");
    desc.innerHTML = `<b>Description:</b> ${arr["description"]}`;

    const year = document.createElement('p');
    year.innerHTML = `<b>Year published:</b> ${arr['published']}`;

    const lang = document.createElement("p");
    lang.innerHTML = `<b> Language: </b> ${arr['language']}`;


    modal.append(img, title, authors, desc, year, lang);
}

window.addEventListener("click", (e) => {
  if (e.target == modalBox) {
    modalBox.style.display = "none";
  }
});
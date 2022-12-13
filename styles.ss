@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Source Code Pro", monospace;
  color: #285430;
}

body {
  margin: 0;
  height: 100vh;
  width: 100%;
}

img {
  width: 10rem;
}

.search {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E5D9B6;
}
.search__title {
  font-size: 4rem;
  margin: 2rem 0;
}
.search__para {
  font-size: 0.8rem;
}
.search__link {
  font-size: 0.8rem;
}
.search__form {
  width: 50rem;
  display: flex;
  justify-content: space-between;
}
.search__form--input {
  width: 83%;
  border-radius: 20px;
  padding: 0.5rem;
}
.search__form--button {
  width: 15%;
  background-color: #A4BE7B;
  border-radius: 20px;
}

#bookGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  background-color: #A4BE7B;
}

.book-container {
  width: 25rem;
  height: 25rem;
  border: 2px solid #285430;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  font-size: 0.75rem;
  box-shadow: 0 0 10px;
}

.book-container p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.top {
  border-bottom: 2px solid #285430;
  padding-bottom: 1rem;
  height: auto;
  box-shadow: 0 0 10px;
}

a:hover {
  color: red;
}

.book-container:hover {
  box-shadow: 0 0 20px;
  cursor: pointer;
}

/*# sourceMappingURL=styles.ss.map */
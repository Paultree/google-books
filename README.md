# google-books

Google books API search engine that is built with HTML, CSS and Javascript. Made to practice API fetching.

# Image

![Alt Text](project-demo.gif)

# Link

# Setup

## Outline

This project will require you to use both DOM manipulation and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page - [x]
- Form containing a text input and a submit / search button - [x]

- A grid of books - [x]

  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string - [x]
- The books that you receive should be rendered in the books grid. - [x]
- Each book in the grid should have an image, author, title and description - [x]
- The grid should be responsive on different screen sizes - [x]
- You should use async / await for your request code, NOT .then - [x]

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like. - [x]
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables - [x]

Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules. - [x]
- Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible - [x]
- Always use iterators over loops - [x]
- Always parametrize and abstract large pieces of duplicate code. - [x]

## Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query. - []
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc. - [x]

### Github

- Create a repo on github with a README
- Clone Repo
- Create and checkout develop branch
- Push all changes to your develop branch
- When submitting create a pull request from develop into main for review
- Add coach as a reviewer

## Useful Resources:

- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Download Postman](https://www.postman.com/downloads/)

# Approach

6/12/2022

- Built template files
- Created HTML
  - Single Page Application.
  - Upon hitting search button, entire search header will move to top of page.
  - Grid of search results will return to user.

7/12/2022

- Fetched API..
- Need to figure out a CLEAN way to render book info to page...
- Getting an uncaught error on line 6 of dom-module.js
  - some keys have an undefined value...
    - will need to add a .catch to these errors..
    - alternatively, for any undefined, we can change it at variable defining..
    - desc, change to 'No description'.
    - image, change to an image to no photo
    - may be able to change at destructuring part...

8/12/2022

- Basic functionality achieved.
- Need to implement an error message when the following happens:
  - search failed..
  - no results found(similar to above)
  - user submits search before inputting a search word..

10/12/2022

- Made some cleanups
- Implemented modal boxes
- Todo: Make app accessible to phone users..
- Todo: Rebuild on React..

# Reflection

# Future goals

- Rebuild the entire app using the ReactJS framework.

# Further reading

# Stay in touch

# Licence

# Contribution

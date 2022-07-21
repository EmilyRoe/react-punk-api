# Punk-API Project

## About

The purpose of this project is to provide users with an easy to read, and informative way to view the different beers available to them from the Punk API. The cards are displayed in a grid format, which allows the user to scroll through the cards, or search for a specific beer, and view the information about each one. This information includes ABV percentage, Acidity Level and Date of Brew.

## Functionality

The two most important parts of this app are the filter and the search functionality, because they determine the arrays of beers which can be sorted by the user. For this to happen, the beer array must be retrieved from the API. This is performed within the app.jsx file with the fetchBeers function.

The search functionality involved setting the useState in app.jsx before passing this down to NavBar.jsx, then SearchBar.jsx where the text input functionality is. This enables users to search for any beer they would like. If they search for a beer which is not in the API, the users are directed to the Not Found page.

The project also includes three filters: Classic Range Beers, Beers with High ABV, Beers with High Acidity. These filters enable the user to narrow down the selection of beers in the array displayed on the screen. For each of these filters the state is set in app.jsx before being passed down. For highABVBeers and classicRangeBeers, useEffect is also set in app.jsx. For beersWithHighAcidity, this is passed via Routes and MainPage to CardList where .filter and .map are used to find the beers with ph below 4.

## Technology

- HTML
- CSS
- JavaScript
- React

## Future Develpoments

- Add a webpage for each beer which gives more details including reviews, stockists etc. The user will be directed to these pages when the beer is clicked.
- Intergration with other APIs for a wider selection of beers and beverages.
- A 'beer of the day' feature
- Refactoring of code, for readability and reusability and componenent testing with React Testing Library & Enzyme

## Links

### GitHub Repo

https://github.com/EmilyRoe/react-punk-api

### Deployed App

https://emilyroe.github.io/react-punk-api/

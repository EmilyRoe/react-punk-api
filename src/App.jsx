import React, { Component, useState, useEffect } from 'react'
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Routes from "./containers/Routes";

const App = () => {
  const [beers, setBeers ] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [ beersWithHighABV, setBeersWIthHighABV ] = useState(false);

  const searchBeersByName = searchText ? `?beer_name=${searchText}` : "";

  // For the filters, we probably need some kind of checkbox that toggles between true and false. If it is true, we will
  // need to make another request to the API. (Look at the DOCS to find the relevant url param.)

  const fetchBeers = (searchTerm) => {

    // fetch(`https://api.punkapi.com/v2/beers/search.php?s=${searchTerm}`)

    fetch(`https://api.punkapi.com/v2/beers${searchBeersByName}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setBeers(jsonResponse);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    fetchBeers()
  }, [searchText]);


  return (
    <>
      <section className={styles.navBar}>
        <NavBar searchText={searchText} setSearchText={setSearchText}/>
      </section>
      <section className={styles.main}>
        <Main />
      </section>
      <button className={styles.button} onClick={() => fetchBeers("Buzz")}>Click me</button>
      <section className={styles.content}>
        <Routes searchText={searchText} />
      </section>
    </>
  )
}

export default App


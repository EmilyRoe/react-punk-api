import React, { Component, useState, useEffect } from 'react'
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
// import Main from "./components/Main";
import Routes from "./containers/Routes";

const App = () => {
  const [beers, setBeers ] = useState([]);
  const [ searchText, updateSearchText] = useState("");
  const [ beersWithHighABV, setBeersWithHighABV ] = useState(false);
  const [ beersClassicRange, setBeersClassicRange ] = useState(false);
  const [ beersWithHighAcidity, setBeersWithHighAcidity ] = useState(false);

  const searchBeersByName = searchText ? `?beer_name=${searchText}` : "";
  const highAbvBeers = beersWithHighABV ? `?abv_gt=7` : "";
  const classicRangeBeers = beersClassicRange ? `?brewed_before=12-2009` : "";

  const handleABVFilter = () => {
    setBeersWithHighABV(!beersWithHighABV)
  }

  const handleClassicBeers = () => {
    setBeersClassicRange(!beersClassicRange)
  }

  const handleHighAcidity = () => {
    setBeersWithHighAcidity(!beersWithHighAcidity)
  }

  const fetchBeers = (searchTerm) => {
    fetch(`https://api.punkapi.com/v2/beers${searchBeersByName}${highAbvBeers}${classicRangeBeers}`)
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
  }, [searchText, highAbvBeers, classicRangeBeers]);

  return (
    <>
      <section className={styles.navBar}>
        <NavBar updateSearchText={updateSearchText} 
        setBeersWithHighABV={setBeersWithHighABV} 
        handleABVFilter={handleABVFilter} 
        handleHighAcidity={handleHighAcidity}
        handleClassicBeers={handleClassicBeers} 
        />
      </section>
      {/* <section className={styles.main}>
        <Main />
      </section> */}
      <section className={styles.content}>
        <Routes beers={beers} beersWithHighAcidity={beersWithHighAcidity} />
      </section>
    </>
  )
}

export default App


import React, { Component } from 'react'
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";

const NavBar = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <nav className={styles.navBarContent}>
      
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search..." searchText={searchText} setSearchText={setSearchText}/>
      </div>

      <ul>
        <li>Highest ABV</li>
        <button>Placeholder</button>
        <li>Classic Range</li>
        <button>Placeholder</button>
        <li>Acidity</li>
        <button>Placeholder</button>
      </ul>
      
    </nav>
  )
}

export default NavBar

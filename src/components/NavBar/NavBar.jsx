import React, { Component } from 'react'
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import FiltersList from "../FiltersList";

const NavBar = (props) => {
  const { updateSearchText, setBeersWithHighABV, handleABVFilter, handleClassicBeers, handleHighAcidity } = props;

  return (
    <nav className={styles.navBarContent}>
      
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search..." updateSearchText={updateSearchText} />
      </div>

    <FiltersList handleABVFilter={handleABVFilter} handleHighAcidity={handleHighAcidity} handleClassicBeers={handleClassicBeers} />
      
    </nav>
  )
}

export default NavBar

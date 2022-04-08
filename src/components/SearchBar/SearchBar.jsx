import React, { useState, useEffect } from 'react'
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { placeholder, searchText, setSearchText } = props;
    
    const input = isOpen ? <input type="text" placeholder={placeholder} value={searchText} onChange={e => setSearchText(e.target.value)} /> : null 

  return (
    <div className={styles.searchPanel}>
      <span onClick={() => setIsOpen(!isOpen)}>Logo</span>
      {input}
    </div>
  )
}

export default SearchBar

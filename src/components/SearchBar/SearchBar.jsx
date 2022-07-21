import React, { useState } from 'react'
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { placeholder, updateSearchText } = props;
    
    const input = isOpen ? <input type="text" placeholder={placeholder} className={styles.searchPanel} onInput={e => updateSearchText(e.target.value)} /> : null;

  return (
    <div className={styles.searchPanel}>
      <span onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"></FontAwesomeIcon>
      </span>
        {input}
    </div>
  )
}

export default SearchBar

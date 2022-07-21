import React from 'react'
import styles from './FiltersList.module.scss';

const FiltersList = (props) => {
  const { beersWithHighABV, handleABVFilter, beersClassicRange, handleClassicBeers, beersWithHighAcidity, handleHighAcidity } = props;

  return (
    <div className={styles.filterMenu}>
        <h2 className={styles.filterHeading}>Beer Filters:</h2>
        <ul>
          <div className={styles.filterItems}>
            <input 
              type="checkbox" 
              value={beersWithHighABV} 
              onClick={handleABVFilter} />
            <li>Highest ABV</li>
          </div>
          <div className={styles.filterItems}>
            <input 
              type="checkbox" 
              value={beersClassicRange} 
              onClick={handleClassicBeers}/>
            <li>Classic Range</li>
          </div>
          <div className={styles.filterItems}>
            <input 
              type="checkbox" 
              value={beersWithHighAcidity} 
              onClick={handleHighAcidity}/>
            <li>Acidity</li>
          </div>
        </ul>
    </div>
  )
}

export default FiltersList

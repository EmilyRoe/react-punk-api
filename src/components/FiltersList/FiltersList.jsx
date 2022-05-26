import React from 'react'
import styles from './FiltersList.module.scss';

const FiltersList = (props) => {
  const { beersWithHighABV, handleABVFilter, beersClassicRange, handleClassicBeers, beersWithHighAcidity, handleHighAcidity } = props;

  return (
    <ul>
        <li>Highest ABV</li>
        <input type="checkbox" className={styles.checkbox} value={beersWithHighABV} onClick={handleABVFilter} />
        <li>Classic Range</li>
        <input type="checkbox" className={styles.checkbox} value={beersClassicRange} onClick={handleClassicBeers}/>
        <li>Acidity</li>
        <input type="checkbox" className={styles.checkbox} value={beersWithHighAcidity} onClick={handleHighAcidity}/>
      </ul>
  )
}

export default FiltersList

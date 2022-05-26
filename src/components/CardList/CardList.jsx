import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const { beers, checkboxState } = props;
  
  const getCardJsx = (beer) => (
    <div className={styles.beerCards} key={beer.id} >
      <Card beer={beer}/>
    </div>
  );
  const filterByPH = beers.filter(beer => beer.ph < 4);
  console.log(filterByPH)

  const acidicBeersList = filterByPH.map(beer => {
    return <Card beer={beer} key={beer.ph}/>
  })

  const beersList = beers.map(beer => <Card beer={beer} />)

  const renderAcidicBeers = checkboxState === true ? acidicBeersList : beersList;

  return (
    <section className={styles.beerCards}>{renderAcidicBeers}</section>
  )
};

export default CardList;

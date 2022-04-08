import React from 'react'
import styles from "./MainPage.module.scss";
import beers from "../../data/beers";

import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";

const MainPage = (props) => {
  const { searchText } = props;

  const matchingBeers = beers.filter((beer) => {
    const beerName = beer.name.toLowerCase();
    return beerName.includes(searchText.toLowerCase());
  })

  const contentJsx = matchingBeers.length ? (
    <CardList beers={matchingBeers} />
  ) : (
    <FeedbackPanel header="No matches" text="None of our beers matched that text"/>
  )

  return (
    <section className={styles.mainPage}>
      {contentJsx}
    </section>
  );
};

export default MainPage

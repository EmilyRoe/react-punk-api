import React from 'react'
import styles from "./MainPage.module.scss";
import { Link } from "react-router-dom";

import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";

const MainPage = (props) => {
  const { beers, beersWithHighAcidity } = props;

  const contentJsx = beers && beers.length ? (
    <CardList beers={beers} beersWithHighAcidity={beersWithHighAcidity} />
  ) : (
    <FeedbackPanel header="No matches" text="None of our beers matched that text"/>
  )

  return (
    <section className={styles.mainPage}>
      <Link style={{textDecoration: 'none'}} to="/">
        <h2 className={styles.mainHeading}>BrewDog Beer API Challenge</h2>
      </Link>
      {contentJsx}
    </section>
  );
};

export default MainPage

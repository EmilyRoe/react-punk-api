import React from 'react'
import styles from "./MainPage.module.scss";

import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";

const MainPage = (props) => {
  const { beers } = props;

  const contentJsx = beers && beers.length ? (
    <CardList beers={beers} />
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
